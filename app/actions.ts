'use server'

import { OrderStatus, Prisma } from '@prisma/client'
import { hashSync } from 'bcrypt'
import { cookies } from 'next/headers'

import { prisma } from '@/prisma/prisma-client'

import { PayOrder, VerificationUser } from '@/components/shared/email'

import { TCheckoutFormValues } from '@/constants/schemes'

import { Payment, sendEmail } from '@/lib/other'
import { getUserSession } from '@/lib/other/get-user-session'

export async function createOrder(data: TCheckoutFormValues) {
	try {
		const cookieStore = cookies()
		const cartToken = cookieStore.get('cartToken')?.value

		if (!cartToken) {
			throw new Error('Токен не найден')
		}

		const userCart = await prisma.cart.findFirst({
			include: {
				user: true,
				items: {
					include: {
						ingredients: true,
						productItem: {
							include: {
								product: true
							}
						}
					}
				}
			},
			where: {
				token: cartToken
			}
		})

		if (!userCart?.totalAmount) {
			return
		}

		if (!userCart) {
			throw new Error('Cart not found')
		}

		const order = await prisma.order.create({
			data: {
				token: cartToken,
				fullName: data.firstName + ' ' + data.lastName,
				email: data.email,
				phone: data.phone,
				address: data.address,
				comment: data.comment,
				totalAmount: userCart?.totalAmount,
				status: OrderStatus.PENDING,
				items: JSON.stringify(userCart?.items)
			}
		})

		/* Очистка корзины*/
		await prisma.cart.update({
			where: {
				id: userCart.id
			},
			data: {
				totalAmount: 0
			}
		})

		/* Очистка товаров из корзины*/
		await prisma.cartItem.deleteMany({
			where: {
				cartId: userCart.id
			}
		})

		const paymentData = await Payment({
			orderId: order.id,
			amount: order.totalAmount,
			description: `Оплата заказа # ${order.id}`
		})

		if (!paymentData) {
			throw new Error('Не удалось создать платеж')
		}

		await prisma.order.update({
			where: {
				id: order.id
			},
			data: {
				paymentId: paymentData.id
			}
		})

		const paymentUrl = paymentData.confirmation.confirmation_url
		await sendEmail(
			data.email,
			`Tasty Pizza / оплатите заказ # ${order.id}`,
			PayOrder({
				orderId: order.id,
				totalAmount: order.totalAmount,
				paymentUrl
			})
		)

		return paymentUrl
	} catch (error) {
		console.log(error)
	}
}

export async function updateUserInfo(body: Prisma.UserUpdateInput) {
	try {
		const cureentUser = await getUserSession()

		if (!cureentUser) {
			throw new Error('Пользователь не найден')
		}

		const findUser = await prisma.user.findFirst({
			where: {
				id: Number(cureentUser.id)
			}
		})

		await prisma.user.update({
			where: {
				id: Number(cureentUser.id)
			},
			data: {
				fullName: body.fullName,
				email: body.email,
				password: body.password
					? hashSync(body.password as string, 10)
					: findUser?.password,
				verified: new Date()
			}
		})
	} catch (error) {
		console.log(error)
	}
}

export async function registerUser(body: Prisma.UserCreateInput) {
	try {
		const user = await prisma.user.findFirst({
			where: {
				email: body.email
			}
		})

		if (user) {
			if (!user.verified) {
				throw new Error('Почта не подтверждена')
			}

			throw new Error('Пользователь уже существует')
		}

		const createdUser = await prisma.user.create({
			data: {
				fullName: body.fullName,
				email: body.email,
				password: hashSync(body.password, 10)
			}
		})

		const code = Math.floor(100000 + Math.random() * 900000).toString()

		await prisma.verificationCode.create({
			data: {
				code,
				userId: createdUser.id
			}
		})

		await sendEmail(
			createdUser.email,
			'Tasty Pizza / Подтверждение регистрации',
			VerificationUser({ code })
		)
	} catch (error) {
		console.log('Error [CREATE_USER]', error)
		throw error
	}
}
