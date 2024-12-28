'use client'

import cn from 'clsx'
import { Trash2Icon } from 'lucide-react'

import {
	CartItemCount,
	CartItemImage,
	CartItemInfo,
	CartItemPrice
} from '@/components/features/cart'

import { ICartItem } from '@/@types/cart'

import styles from './CartDrawerItem.module.scss'

interface ICartDrawerItem extends ICartItem {
	className?: string
	onUpdateQuantity?: (type: 'plus' | 'minus') => void
	onClickRemove?: () => void
}

export const CartDrawerItem = ({
	imageUrl,
	name,
	price,
	quantity,
	details,
	onUpdateQuantity,
	onClickRemove,
	className
}: ICartDrawerItem) => {
	return (
		<div className={cn(styles.root, className)}>
			<CartItemImage src={imageUrl} />
			<div className={styles.content}>
				<CartItemInfo details={details} name={name} className={styles.info} />
				<span className={styles.line}></span>
				<div className={styles.block}>
					<CartItemCount value={quantity} onClick={onUpdateQuantity} />
					<span className={styles.price}>
						<CartItemPrice value={price} />
						<Trash2Icon
							size={18}
							className={styles.price__icon}
							onClick={onClickRemove}
						/>
					</span>
				</div>
			</div>
		</div>
	)
}
