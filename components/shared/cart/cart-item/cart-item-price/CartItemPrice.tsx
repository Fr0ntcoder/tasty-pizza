import cn from 'clsx'

import styles from './CartItemPrice.module.scss'

interface Props {
	value: number
	className?: string
}

export function CartItemPrice({ value, className }: Props) {
	return <div className={cn(styles.price, className)}>{value} ₽</div>
}
