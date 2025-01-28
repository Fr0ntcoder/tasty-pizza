'use client'

import { Category } from '@prisma/client'
import cn from 'clsx'

import { useCategoryStore } from '@/store/category'

import styles from './Navigation.module.scss'

interface INavigationProps {
	items: Category[]
	className?: string
}

export function Navigation({ items, className }: INavigationProps) {
	const categoryActiveId = useCategoryStore(state => state.activeId)

	const categoriesList = items.map((item, i) => (
		<a
			href={`/#${item.name}`}
			key={i}
			className={cn(styles.item, categoryActiveId === item.id && styles.active)}
		>
			{item.name}
		</a>
	))
	return <div className={cn(styles.list)}>{categoriesList}</div>
}
