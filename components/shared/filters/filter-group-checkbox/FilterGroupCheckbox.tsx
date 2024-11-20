'use client'

import cn from 'clsx'
import { useState } from 'react'

import {
	FilterCheckbox,
	FilterCheckboxProps
} from '@/components/shared/filters/filter-checkbox'
import Title from '@/components/shared/title'

import Input from '@/components/ui/fields/input'

import styles from './FilterGroupCheckbox.module.scss'

type Props = {
	title: string
	items: FilterCheckboxProps[]
	defaultItems: FilterCheckboxProps[]
	limit: number
	searchInputPlaceholder?: string
	onChange?: (values: string[]) => void
	defaultValue?: string[]
	className?: string
}

export const FilterGroupCheckbox = ({
	title,
	items,
	defaultItems,
	limit,
	searchInputPlaceholder = 'Поиск...',
	onChange,
	defaultValue,
	className
}: Props) => {
	const [showAll, setShowAll] = useState(false)
	const list = showAll ? items : defaultItems?.slice(0, limit)
	console.log(list)
	return (
		<div className={cn(styles.root, className)}>
			<Title text={title} size='xs' className={styles.title} />
			{showAll && (
				<Input placeholder={searchInputPlaceholder} className={styles.input} />
			)}
			<div className={styles.list}>
				{list.map((item, i) => (
					<FilterCheckbox
						/* onCheckedChange={i => console.log(i)} */
						checked={false}
						key={String(item.value)}
						value={item.value}
						text={item.text}
						endAdornment={item.endAdornment}
					/>
				))}
			</div>
			{items.length > limit && (
				<button onClick={() => setShowAll(!showAll)} className={styles.btn}>
					{showAll ? 'Скрыть' : '+ Показать все'}
				</button>
			)}
		</div>
	)
}
