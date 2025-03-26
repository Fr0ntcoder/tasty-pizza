'use client'

import cn from 'clsx'
import { Trash2Icon } from 'lucide-react'

import {
	CartItemCount,
	CartItemImage,
	CartItemInfo,
	CartItemPrice
} from '@/components/shared/cart/cart-item'

import { ICartItem } from '@/@types/cart'

import styles from './CartDrawerItem.module.scss'

interface ICartDrawerItemProps extends ICartItem {
	className?: string
	onUpdateQuantity?: (type: 'plus' | 'minus') => void
	onClickRemove?: () => void
}

export function CartDrawerItem({
	imageUrl,
	name,
	price,
	quantity,
	details,
	onUpdateQuantity,
	onClickRemove,
	disabled,
	className
}: ICartDrawerItemProps) {
	return (
		<div
			className={cn(styles.item, className, {
				[styles['item--disabled']]: disabled
			})}
		>
			<CartItemImage src={imageUrl} />
			<div className={styles.item__content}>
				<CartItemInfo
					details={details}
					name={name}
					className={styles.item__info}
				/>
				<span className={styles.item__line}></span>
				<div className={styles.item__block}>
					<CartItemCount value={quantity} onClick={onUpdateQuantity} />
					<span className={styles.item__price}>
						<CartItemPrice value={price} />
						<Trash2Icon
							size={18}
							className={styles.item__icon}
							onClick={onClickRemove}
						/>
					</span>
				</div>
			</div>
		</div>
	)
}
