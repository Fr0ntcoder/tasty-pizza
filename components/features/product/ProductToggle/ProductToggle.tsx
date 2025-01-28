'use client'

import cn from 'clsx'

import { type TVariant } from '@/@types/product'

import styles from './ProductToggle.module.scss'

interface IProductToggleProps {
	items: readonly TVariant[]
	onClick?: (value: TVariant['value']) => void
	value?: TVariant['value']
	className?: string
}

export function ProductToggle({
	items,
	value,
	onClick,
	className
}: IProductToggleProps) {
	const list = items.map(item => (
		<button
			key={item.name}
			onClick={() => onClick?.(item.value)}
			className={cn(styles.btn, {
				[styles.btn__active]: item.value === value,
				[styles.btn__disabled]: item.disabled
			})}
		>
			{item.name}
		</button>
	))
	return <div className={cn(styles.root, className)}>{list}</div>
}
