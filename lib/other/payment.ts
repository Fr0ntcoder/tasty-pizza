import axios from 'axios'

import { PaymentData } from '@/@types/yookassa'

interface Props {
	description: string
	orderId: number
	amount: number | null
}

export async function Payment(details: Props) {
	const { data } = await axios.post<PaymentData>(
		'https://api.yookassa.ru/v3/payments',
		{
			amount: {
				value: details.amount,
				currency: 'RUB'
			},
			capture: true,
			description: details.description,
			metadata: {
				order_id: details.orderId
			},
			confirmation: {
				type: 'redirect',
				return_url: 'http://localhost:3000/'
			}
		},
		{
			auth: {
				username: process.env.NEXT_PUBLIC_YOOKASSA_SHOP_ID as string,
				password: process.env.NEXT_PUBLIC_YOOKASSA_API_KEY as string
			},
			headers: {
				'Content-Type': 'application/json',
				'Idempotence-Key': Math.random().toString(36).substring(7)
			}
		}
	)

	return data
}
