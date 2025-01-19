import cn from 'clsx'

import { ICartCount } from '@/@types/cart'

import { CartCountIcon } from './cart-count-icon'

import styles from './CartItemCount.module.scss'

type TCartItemCountProps = ICartCount

export function CartItemCount({
	className,
	onClick,
	value = 1,
	size = 'sm'
}: TCartItemCountProps) {
	return (
		<div className={cn(styles.root, className)}>
			<CartCountIcon
				onClick={() => onClick?.('minus')}
				disabled={value === 1}
				size={size}
				type='minus'
			/>

			<b className={size === 'sm' ? styles.text__sm : styles.text__md}>
				{value}
			</b>

			<CartCountIcon
				onClick={() => onClick?.('plus')}
				size={size}
				type='plus'
			/>
		</div>
	)
}
