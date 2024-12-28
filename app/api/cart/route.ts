import crypto from 'crypto'
import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@/prisma/prisma-client'

import { ICreateCartItemValues } from '@/services/dto/cart.dto'

import { findCreateCart } from '@/lib/cart'
import { updateCartTotal } from '@/lib/other'

export async function GET(req: NextRequest) {
	try {
		const token = req.cookies.get('cartToken')?.value
		if (!token) {
			return NextResponse.json({ totalAmount: 0, items: [] })
		}

		const userCart = await prisma.cart.findFirst({
			where: {
				OR: [
					{
						token
					}
				]
			},
			include: {
				items: {
					orderBy: {
						createdAt: 'desc'
					},
					include: {
						productItem: {
							include: {
								product: true
							}
						},
						ingredients: true
					}
				}
			}
		})

		return NextResponse.json(userCart)
	} catch (error) {
		console.log(error)
		return NextResponse.json(
			{ message: 'Не удалось получить корзину' },
			{ status: 500 }
		)
	}
}

export async function POST(req: NextRequest) {
	try {
		let token = req.cookies.get('cartToken')?.value
		if (!token) {
			token = crypto.randomUUID()
		}

		const userCart = await findCreateCart(token)

		const data = (await req.json()) as ICreateCartItemValues

		const findCartItem = await prisma.cartItem.findFirst({
			where: {
				cartId: userCart.id,
				productItemId: data.productItemId,
				ingredients: {
					every: { id: { in: data.ingredients } }
				}
			}
		})

		if (findCartItem) {
			await prisma.cartItem.update({
				where: {
					id: findCartItem.id
				},
				data: {
					quantity: findCartItem.quantity + 1
				}
			})
		}

		await prisma.cartItem.create({
			data: {
				cartId: userCart.id,
				productItemId: data.productItemId,
				quantity: 1,
				ingredients: {
					connect: data.ingredients?.map(id => ({ id }))
				}
			}
		})

		const updateUserCart = await updateCartTotal(token)

		const response = NextResponse.json(updateUserCart)

		response.cookies.set('cartToken', token)

		return response
	} catch (error) {
		console.log(error)
		return NextResponse.json(
			{ message: 'Не удалось создать корзину' },
			{ status: 500 }
		)
	}
}
