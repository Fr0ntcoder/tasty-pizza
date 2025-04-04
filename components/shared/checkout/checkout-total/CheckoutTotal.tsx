import { ArrowRight, Package, Percent, Truck } from 'lucide-react'

import { Button } from '@/components/ui'

import { WhiteBlock } from '@/components/shared/white-block'

import { CheckoutTotalDetails } from './checkout-total-details'

import styles from './CheckoutTotal.module.scss'

const VAT = 15
const DELIVERY_PRICE = 250

interface Props {
	totalAmount: number
	className?: string
}

export function CheckoutTotal({ totalAmount, className }: Props) {
	const vatPrice = (totalAmount / 100) * VAT
	const totalPrice = totalAmount + vatPrice + DELIVERY_PRICE
	return (
		<WhiteBlock className={styles.total}>
			<div className={styles.total__top}>
				<span className={styles.total__text}>Итого:</span>
				<span className={styles.total__price}>{totalPrice} ₽</span>
			</div>
			<div className={styles.total__wrap}>
				<CheckoutTotalDetails
					icon={<Package />}
					text='Стоймость товара:'
					value={`${totalAmount}`}
				/>
				<CheckoutTotalDetails
					icon={<Percent />}
					text='Налоги:'
					value={`${vatPrice}`}
				/>
				<CheckoutTotalDetails
					icon={<Truck />}
					text='Доставка:'
					value={`${DELIVERY_PRICE}`}
				/>
			</div>
			<Button variant='default' className={styles.total__btn}>
				Перейти к оплате <ArrowRight />
			</Button>
		</WhiteBlock>
	)
}
