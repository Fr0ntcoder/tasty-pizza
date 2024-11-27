'use client'

import cn from 'clsx'
import { ChangeEvent, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import {
	FilterCheckbox,
	FilterCheckboxProps
} from '@/components/shared/filters'
import Title from '@/components/shared/title'

import { Input } from '@/components/ui/fields'

import styles from './FilterGroupCheckbox.module.scss'

type Props = {
	title: string
	items: FilterCheckboxProps[]
	defaultItems?: FilterCheckboxProps[]
	limit?: number
	loading?: boolean
	searchInputPlaceholder?: string
	onClickCheckbox?: (id: string) => void
	defaultValue?: string[]
	selected?: Set<string>
	className?: string
	name?: string
}

export const FilterGroupCheckbox = ({
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
}: Props) => {
	const [showAll, setShowAll] = useState(false)
	const [searchValue, setSearchValue] = useState('')

	const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
	}

	if (loading) {
		return (
			<div className={styles.loading}>
				<Title text={title} size='xs' className={styles.title} />

				<Skeleton
					className={styles.skeleton}
					baseColor='#f5f5f4'
					highlightColor='rgba(90, 5, 25,.5)'
					count={items.length || limit}
					style={{ marginBottom: '15px' }}
				/>

				{limit && items.length > limit && (
					<Skeleton
						baseColor='#f5f5f4'
						highlightColor='rgba(90, 5, 25,.5)'
						width={130}
					/>
				)}
			</div>
		)
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
			{limit && items.length > limit && (
				<button onClick={() => setShowAll(!showAll)} className={styles.btn}>
					{showAll ? 'Скрыть' : '+ Показать все'}
				</button>
			)}
		</div>
	)
}
