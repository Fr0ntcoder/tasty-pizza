'use server'

import { OrderStatus } from '@prisma/client'
import { cookies } from 'next/headers'

import { prisma } from '@/prisma/prisma-client'

import { PayOrder } from '@/components/shared/email'

import { TCheckoutFormValues } from '@/constants/schemes'

import { Payment } from '@/lib/other'
import { sendEmail } from '@/lib/other/sendEmail'

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
