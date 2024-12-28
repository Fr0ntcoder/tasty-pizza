'use client'

import cn from 'clsx'

import { TVariant } from '@/@types/product'

import styles from './ProductToggle.module.scss'

interface IProductToggle {
	items: readonly TVariant[]
	onClick?: (value: TVariant['value']) => void
	value?: TVariant['value']
	className?: string
}

export const ProductToggle = ({
	items,
	value,
	onClick,
	className
}: IProductToggle) => {
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
