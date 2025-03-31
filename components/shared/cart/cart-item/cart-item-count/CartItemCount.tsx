import cn from 'clsx'

import { ICartCount } from '@/@types/cart'

import { CartCountIcon } from './cart-count-icon'

import styles from './CartItemCount.module.scss'

type Props = ICartCount

export function CartItemCount({
	className,
	onClick,
	value = 1,
	size = 'sm'
}: Props) {
	return (
		<div className={cn(styles.count, className)}>
			<CartCountIcon
				onClick={() => onClick?.('minus')}
				disabled={value === 1}
				size={size}
				type='minus'
			/>

			<b className={size === 'sm' ? styles.count__sm : styles.count__md}>
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
