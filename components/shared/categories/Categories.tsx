'use client'

import cn from 'clsx'

import styles from './Categories.module.scss'
import { useCategoryStore } from '@/store/category'

type Props = {
	className?: string
}

const categories = [
	{
		id: 1,
		name: 'Пицца'
	},
	{
		id: 2,
		name: 'Комбо'
	},
	{
		id: 3,
		name: 'Закуски'
	},
	{
		id: 4,
		name: 'Коктейли'
	},
	{
		id: 5,
		name: 'Кофе'
	},
	{
		id: 6,
		name: 'Напитки'
	},
	{
		id: 7,
		name: 'Десерты'
	}
]

export const Categories = ({ className }: Props) => {
	const categoryActiveId = useCategoryStore(state => state.activeId)

	const categoriesList = categories.map((item, i) => (
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
