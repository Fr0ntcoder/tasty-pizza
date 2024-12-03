import cn from 'clsx'
import { Trash2Icon } from 'lucide-react'

import { Count } from '@/shared/components/ui/count'

import {
	CartItemImage,
	CartItemInfo,
	CartItemPrice
} from '@/shared/components/features/cart'
import { TCartItem } from '@/shared/components/features/cart/cart-item/cart-item-types'

import styles from './CartDrawerItem.module.scss'

type TCartDrawerItem = {
	className?: string
} & TCartItem

export const CartDrawerItem = ({
	imageUrl,
	name,
	price,
	quantity,
	details,
	className
}: TCartDrawerItem) => {
	return (
		<div className={cn(styles.root, className)}>
			<CartItemImage src={imageUrl} />
			<div className={styles.content}>
				<CartItemInfo details={details} name={name} className={styles.info} />
				<div className={styles.block}>
					<Count
						onClick={type => {
							console.log(type)
						}}
						value={quantity}
					/>
					<span className={styles.price}>
						<CartItemPrice value={price} />
						<Trash2Icon size={18} className={styles.price__icon} />
					</span>
				</div>
			</div>
		</div>
	)
}
