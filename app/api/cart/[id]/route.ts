import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@/prisma/prisma-client'

import { updateCartTotal } from '@/lib/update-cart-total'

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
