import cn from 'clsx'

import styles from './CartItemPrice.module.scss'

interface ICartItemPriceProps {
	value: number
	className?: string
}

export function CartItemPrice({ value, className }: ICartItemPriceProps) {
	return <h2 className={cn(styles.root, className)}>{value} ₽</h2>
}
