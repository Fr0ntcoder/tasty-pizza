'use client'

import cn from 'clsx'
import { Trash2Icon } from 'lucide-react'

import { Count } from '@/shared/components/ui/count'

import {
	CartItemImage,
	CartItemInfo,
	CartItemPrice
} from '@/shared/components/features/cart'
import { TCartItem } from '@/shared/components/features/cart/cart-item/types'

import styles from './CartDrawerItem.module.scss'

type TCartDrawerItem = {
	className?: string
	onUpdateQuantity?: (type: 'plus' | 'minus') => void
} & TCartItem

export const CartDrawerItem = ({
	imageUrl,
	name,
	price,
	quantity,
	details,
	onUpdateQuantity,
	className
}: TCartDrawerItem) => {
	return (
		<div className={cn(styles.root, className)}>
			<CartItemImage src={imageUrl} />
			<div className={styles.content}>
				<CartItemInfo details={details} name={name} className={styles.info} />
				<div className={styles.block}>
					<Count value={quantity} onClick={onUpdateQuantity} />
					<span className={styles.price}>
						<CartItemPrice value={price} />
						<Trash2Icon size={18} className={styles.price__icon} />
					</span>
				</div>
			</div>
		</div>
	)
}
