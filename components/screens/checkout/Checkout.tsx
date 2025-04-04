'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import cn from 'clsx'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'

import { Title } from '@/components/ui'

import {
	CheckoutAddress,
	CheckoutCart,
	CheckoutPersonal,
	CheckoutTotal
} from '@/components/shared/checkout'

import { useCart } from '@/hooks'

import { TCheckoutFormValues, chechoutFormSchema } from '@/constants/schemes'

import { createOrder } from '@/app/actions'

import styles from './Checkout.module.scss'

interface Props {
	className?: string
}

export function Checkout({ className }: Props) {
	const { items, loading, onUpdateQuantity, removeCartItem, totalAmount } =
		useCart()
	const form = useForm<TCheckoutFormValues>({
		resolver: zodResolver(chechoutFormSchema),
		defaultValues: {
			email: '',
			firstName: '',
			lastName: '',
			phone: '',
			address: '',
			comment: ''
		}
	})

	const onSubmit = async (data: TCheckoutFormValues) => {
		try {
			const url = await createOrder(data)
			toast.success('Заказ успешно оформлен')
			if (url) {
				location.href = url
			}
		} catch (error) {
			toast.error('Не удалось сделать заказ')
		}
		console.log(data)
		createOrder(data)
	}
	return (
		<div className={cn(styles.checkout, className)}>
			<Title
				text='Оформление заказа'
				size='lg'
				className={styles.checkout__title}
			/>
			<FormProvider {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className={styles.checkout__wrap}>
						<div className={styles.checkout__left}>
							<CheckoutCart
								items={items}
								onClickCountButton={onUpdateQuantity}
								removeCartItem={removeCartItem}
							/>
							<CheckoutPersonal />
							<CheckoutAddress />
						</div>
						<div className={styles.checkout__right}>
							<CheckoutTotal totalAmount={totalAmount} />
						</div>
					</div>
				</form>
			</FormProvider>
		</div>
	)
}
