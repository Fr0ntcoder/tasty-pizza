'use client'

import cn from 'clsx'

import styles from './ToogleVariants.module.scss'

type Variant = {
	name: string
	value: string
	disabled?: boolean
}

type TToogleVariants = {
	items: readonly Variant[]
	onClick?: (value: Variant['value']) => void
	selectedValue?: Variant['value']
	className?: string
}

export const ToogleVariants = ({
	items,
	selectedValue,
	onClick,
	className
}: TToogleVariants) => {
	const list = items.map(item => (
		<button
			key={item.name}
			onClick={() => onClick?.(item.value)}
			className={cn(styles.btn, {
				[styles.btn__active]: item.value === selectedValue,
				[styles.btn__disabled]: item.disabled
			})}
		>
			{item.name}
		</button>
	))
	return <div className={cn(styles.root, className)}>{list}</div>
}
