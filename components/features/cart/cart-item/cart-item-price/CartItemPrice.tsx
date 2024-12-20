import cn from 'clsx'

import styles from './CartItemPrice.module.scss'

interface ICartItemPrice {
	value: number
	className?: string
}

export const CartItemPrice = ({ value, className }: ICartItemPrice) => {
	return <h2 className={cn(styles.root, className)}>{value} ₽</h2>
}
