import cn from 'clsx'

import styles from './CartItemPrice.module.scss'

type TCartItemPrice = {
	value: number
	className?: string
}

export const CartItemPrice = ({ value, className }: TCartItemPrice) => {
	return <h2 className={cn(styles.root, className)}>{value} ₽</h2>
}
