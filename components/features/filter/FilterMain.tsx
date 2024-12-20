'use client'

import { RangeSlider, Title } from '@/components/ui'
import { Input } from '@/components/ui/form-elements'

import { useFilters, useIngredients, useQueryFilters } from '@/hooks'

import { FilterGroupCheckbox } from './filter-group-checkbox/FilterGroupCheckbox'

import styles from './FilterMain.module.scss'

interface IFilterMain {
	className?: string
}

export const FilterMain = ({ className }: IFilterMain) => {
	const { ingredients, loading } = useIngredients()
	const filters = useFilters()

	useQueryFilters(filters)

	const items = ingredients.map(item => ({
		value: String(item.id),
		text: item.name
	}))

	const updatePrices = (prices: number[]) => {
		filters.setPrices('priceFrom', prices[0])
		filters.setPrices('priceTo', prices[1])
	}

	return (
		<>
			<Title text='Фильтрация' size='sm' className={styles.title} />
			<div className={styles.checkbox}>
				<FilterGroupCheckbox
					title='Тип теста'
					items={[
						{
							text: 'Тонкое',
							value: '1'
						},
						{
							text: 'Традиционное',
							value: '2'
						}
					]}
					loading={loading}
					onClickCheckbox={filters.setPizzaTypes}
					selected={filters.pizzaTypes}
					name='pizzaTypes'
				/>
				<FilterGroupCheckbox
					title='Размеры'
					items={[
						{
							text: '20 см',
							value: '20'
						},
						{
							text: '30 см',
							value: '30'
						},
						{
							text: '40 см',
							value: '40'
						}
					]}
					loading={loading}
					onClickCheckbox={filters.setPizzaSizes}
					selected={filters.pizzaSizes}
					name='sizes'
				/>
			</div>
			<div className={styles.range}>
				<Title text='Цена от и до:' size='xs' className={styles.title} />
				<div className={styles.range__wrap}>
					<Input
						type='number'
						placeholder='0'
						min={0}
						max={1000}
						value={String(filters.prices.priceFrom)}
						onChange={e =>
							filters.setPrices('priceFrom', Number(e.target.value))
						}
					/>
					<Input
						type='number'
						placeholder='1000'
						min={100}
						max={1000}
						value={String(filters.prices.priceTo)}
						onChange={e => filters.setPrices('priceTo', Number(e.target.value))}
					/>
				</div>
				<RangeSlider
					min={0}
					max={1000}
					step={10}
					value={[
						filters.prices.priceFrom || 0,
						filters.prices.priceTo || 1000
					]}
					onValueChange={updatePrices}
				/>
			</div>
			<div className={styles.checkbox}>
				<FilterGroupCheckbox
					title='Ингредиенты'
					defaultItems={items.slice(0, 6)}
					items={items}
					loading={loading}
					onClickCheckbox={filters.setSelectedIngredients}
					selected={filters.selectedIngredients}
					name='ingredients'
					limit={3}
				/>
			</div>
		</>
	)
}
