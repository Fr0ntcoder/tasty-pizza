'use client'

import cn from 'clsx'
import { ChangeEvent, useState } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'

import { Input } from '@/components/ui/form-elements'
import { Title } from '@/components/ui/title'

import { FilterCheckbox, type IFilterCheckbox } from '../filter-checkbox'
import { FilterSkeleton } from '../filter-skeleton'

import styles from './FilterGroupCheckbox.module.scss'

interface Props {
	title: string
	items: IFilterCheckbox[]
	defaultItems?: IFilterCheckbox[]
	limit?: number
	loading?: boolean
	searchInputPlaceholder?: string
	onClickCheckbox?: (id: string) => void
	defaultValue?: string[]
	selected?: Set<string>
	className?: string
	name?: string
}

export function FilterGroupCheckbox({
	title,
	items,
	defaultItems,
	limit,
	searchInputPlaceholder = 'Поиск...',
	onClickCheckbox,
	selected,
	defaultValue,
	loading,
	name,
	className
}: Props) {
	const [showAll, setShowAll] = useState(false)
	const [searchValue, setSearchValue] = useState('')

	const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
	}

	if (loading) {
		return <FilterSkeleton title={title} items={items} limit={limit} />
	}

	const list = showAll
		? items.filter(item =>
				item.text.toLowerCase().includes(searchValue.toLowerCase())
			)
		: (defaultItems || items)?.slice(0, limit)

	const checkboxList = list?.map(item => (
		<FilterCheckbox
			checked={selected?.has(item.value)}
			key={String(item.value)}
			value={item.value}
			text={item.text}
			endAdornment={item.endAdornment}
			onCheckedChange={() => onClickCheckbox?.(item.value)}
			name={name}
		/>
	))

	return (
		<div className={cn(styles.checkbox, className)}>
			<Title text={title} size='xs' className={styles.checkbox__title} />
			{showAll && (
				<Input
					onChange={onChangeSearchInput}
					placeholder={searchInputPlaceholder}
					className={styles.checkbox__input}
				/>
			)}
			<div className={styles.checkbox__list}>{checkboxList}</div>
			{limit && items.length > limit && (
				<button
					onClick={() => setShowAll(!showAll)}
					className={styles.checkbox__btn}
				>
					{showAll ? 'Скрыть' : '+ Показать все'}
				</button>
			)}
		</div>
	)
}
