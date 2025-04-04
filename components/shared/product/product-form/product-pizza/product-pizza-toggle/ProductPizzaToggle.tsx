'use client'

import cn from 'clsx'

import { type TVariant } from '@/@types/product'

import styles from './ProductPizzaToggle.module.scss'

interface Props {
	items: readonly TVariant[]
	onClick?: (value: TVariant['value']) => void
	value?: TVariant['value']
	className?: string
}

export function ProductPizzaToggle({
	items,
	value,
	onClick,
	className
}: Props) {
	const list = items.map(item => (
		<button
			key={item.name}
			onClick={() => onClick?.(item.value)}
			className={cn(styles.toogle__item, {
				[styles['toogle__item--active']]: item.value === value,
				[styles['toogle__item--disabled']]: item.disabled
			})}
		>
			{item.name}
		</button>
	))
	return (
		<div className={cn(styles.toogle, className)}>
			<div className={styles.toogle__list}>{list}</div>
		</div>
	)
}
