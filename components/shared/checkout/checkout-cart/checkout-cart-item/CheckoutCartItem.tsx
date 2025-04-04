'use client'

import { Ingredient } from '@prisma/client'
import cn from 'clsx'
import { X } from 'lucide-react'

import {
	CartItemCount,
	CartItemImage,
	CartItemInfo,
	CartItemPrice
} from '@/components/shared/cart'

import { ICartItem } from '@/@types/cart'

import styles from './CheckoutCartItem.module.scss'

interface Props extends ICartItem {
	className?: string
	ingredients?: Ingredient[]
	onClickRemove?: () => void
	onClickCountButton?: (type: 'plus' | 'minus') => void
}

export function CheckoutCartItem({
	name,
	price,
	details,
	imageUrl,
	quantity,
	onClickCountButton,
	onClickRemove,
	className
}: Props) {
	return (
		<div className={cn(styles.item, className)}>
			<div className={styles.item__left}>
				<CartItemImage src={imageUrl} />
				<CartItemInfo name={name} details={details} />
			</div>
			<CartItemPrice value={price} className={styles.item__center} />
			<div className={styles.item__right}>
				<CartItemCount onClick={onClickCountButton} value={quantity} />
				<button onClick={onClickRemove} className={styles.item__btn}>
					<X size={20} />
				</button>
			</div>
		</div>
	)
}
