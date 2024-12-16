'use client'

import cn from 'clsx'
import { Trash2Icon } from 'lucide-react'

import {
	CartCount,
	CartImage,
	CartInfo,
	CartPrice
} from '@/components/ui/elements/cart'

import { ICartItem } from '@/@types/cart'

import styles from './CartDrawerItem.module.scss'

interface ICartDrawerItem extends ICartItem {
	className?: string
	onUpdateQuantity?: (type: 'plus' | 'minus') => void
}

export const CartDrawerItem = ({
	imageUrl,
	name,
	price,
	quantity,
	details,
	onUpdateQuantity,
	className
}: ICartDrawerItem) => {
	return (
		<div className={cn(styles.root, className)}>
			<CartImage src={imageUrl} />
			<div className={styles.content}>
				<CartInfo details={details} name={name} className={styles.info} />
				<div className={styles.block}>
					<CartCount value={quantity} onClick={onUpdateQuantity} />
					<span className={styles.price}>
						<CartPrice value={price} />
						<Trash2Icon size={18} className={styles.price__icon} />
					</span>
				</div>
			</div>
		</div>
	)
}
