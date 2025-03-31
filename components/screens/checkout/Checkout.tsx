'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import cn from 'clsx'
import { FormProvider, useForm } from 'react-hook-form'

import { Title } from '@/components/ui/title'

import {
	CheckoutAddress,
	CheckoutCart,
	CheckoutPersonal,
	CheckoutTotal
} from '@/components/shared/checkout'

import { useCart } from '@/hooks'

import {
	TCheckoutFormValues,
	chechoutFormSchema
} from '@/@types/schemes/checkout-form'

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

	const onSubmit = (data: TCheckoutFormValues) => {
		console.log(data)
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
