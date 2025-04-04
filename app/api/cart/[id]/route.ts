import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@/prisma/prisma-client'

import { updateCartTotal } from '@/lib/other/update-cart-total'

export async function PATCH(
	req: NextRequest,
	{ params }: { params: { id: string } }
) {
	try {
		const id = Number(params.id)
		const data = (await req.json()) as { quantity: number }
		const token = req.cookies.get('cartToken')?.value

		if (!token) {
			return NextResponse.json({ error: 'Токен не найден' })
		}

		const cartItem = await prisma.cartItem.findFirst({
			where: {
				id
			}
		})

		if (!cartItem) {
			return NextResponse.json({ error: 'Товар не найден' })
		}

		await prisma.cartItem.update({
			where: {
				id
			},
			data: {
				quantity: data.quantity
			}
		})
		const updateUserCart = await updateCartTotal(token)

		return NextResponse.json(updateUserCart)
	} catch (error) {
		console.log(error)
		return NextResponse.json(
			{ message: 'Не удалось обновить корзину' },
			{ status: 500 }
		)
	}
}

export async function DELETE(
	req: NextRequest,
	{ params }: { params: { id: string } }
) {
	try {
		const id = Number(params.id)
		const token = req.cookies.get('cartToken')?.value

		if (!token) {
			return NextResponse.json({ error: 'Не найден токен' })
		}

		const cartItem = await prisma.cartItem.findFirst({
			where: {
				id: Number(params.id)
			}
		})

		if (!cartItem) {
			return NextResponse.json({ error: 'Корзина не найдена' })
		}

		await prisma.cartItem.delete({
			where: {
				id: Number(params.id)
			}
		})

		const updateUserCart = await updateCartTotal(token)

		return NextResponse.json(updateUserCart)
	} catch (error) {
		console.log('[cart_delete] ошибка сервера', error)

		return NextResponse.json(
			{ message: 'Не удалось удалить корзину' },
			{ status: 500 }
		)
	}
}
