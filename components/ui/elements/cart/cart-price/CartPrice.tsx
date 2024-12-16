import cn from 'clsx'

import styles from './CartPrice.module.scss'

interface ICartPrice {
	value: number
	className?: string
}

export const CartPrice = ({ value, className }: ICartPrice) => {
	return <h2 className={cn(styles.root, className)}>{value} ₽</h2>
}
