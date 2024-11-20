'use client'

import cn from 'clsx'
import { ChangeEvent, useState } from 'react'

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
	const [searchValue, setSearchValue] = useState('')

	const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
	}

	const list = showAll
		? items.filter(item =>
				item.text.toLowerCase().includes(searchValue.toLowerCase())
			)
		: defaultItems?.slice(0, limit)

	const checkboxList = list.map(item => (
		<FilterCheckbox
			checked={false}
			key={String(item.value)}
			value={item.value}
			text={item.text}
			endAdornment={item.endAdornment}
		/>
	))

	return (
		<div className={cn(styles.root, className)}>
			<Title text={title} size='xs' className={styles.title} />
			{showAll && (
				<Input
					onChange={onChangeSearchInput}
					placeholder={searchInputPlaceholder}
					className={styles.input}
				/>
			)}
			<div className={styles.list}>{checkboxList}</div>
			{items.length > limit && (
				<button onClick={() => setShowAll(!showAll)} className={styles.btn}>
					{showAll ? 'Скрыть' : '+ Показать все'}
				</button>
			)}
		</div>
	)
}
