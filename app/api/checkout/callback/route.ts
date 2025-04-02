import { OrderStatus } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@/prisma/prisma-client'

import { OrderSuccess } from '@/components/shared/email'

import { sendEmail } from '@/lib/other'

import { ICartItem } from '@/@types/cart'
import { PaymentCallbackData } from '@/@types/yookassa'

export async function POST(req: NextRequest) {
	try {
		const body = (await req.json()) as PaymentCallbackData

		const order = await prisma.order.findFirst({
			where: {
				id: Number(body.object.metadata.orderId)
			}
		})

		if (!order) {
			return NextResponse.json({ error: 'Order not found' })
		}

		const isSuccess = body.object.status === 'succeeded'

		await prisma.order.update({
			where: {
				id: order.id
			},
			data: {
				status: OrderStatus.SUCCEEDED
			}
		})

		const items = JSON.parse(order?.items as unknown as string) as ICartItem[]

		if (isSuccess) {
			await sendEmail(
				order.email,
				'Ваш заказ успешно оформлен',
				OrderSuccess({ orderId: order.id, items })
			)
		}
	} catch (error) {
		console.log('Checkout callback', error)
		return NextResponse.json({ error: 'Server error' })
	}
}
