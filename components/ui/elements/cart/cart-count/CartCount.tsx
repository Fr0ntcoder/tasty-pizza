import cn from 'clsx'

import { ICartCount } from '@/@types/cart'

import { CartCountIcon } from './cart-count-icon/CartCountIcon'

import styles from './CartCount.module.scss'

export const CartCount = ({
	className,
	onClick,
	value = 1,
	size = 'sm'
}: ICartCount) => {
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
