import cn from 'clsx'

import styles from './CheckoutTotalDetails.module.scss'

interface Props {
	icon?: React.ReactNode
	text?: string
	value?: string
	className?: string
}

export function CheckoutTotalDetails({ text, value, icon, className }: Props) {
	return (
		<div className={cn(styles.details, className)}>
			{icon}
			<div className={styles.details__text}>{text}</div>
			<span className={styles.details__line}></span>
			<div className={styles.details__value}>{value} ₽</div>
		</div>
	)
}
