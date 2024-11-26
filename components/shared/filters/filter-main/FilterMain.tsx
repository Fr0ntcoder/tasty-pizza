'use client'

import {
	FilterCheckbox,
	FilterGroupCheckbox
} from '@/components/shared/filters'
import Title from '@/components/shared/title'

import { Input } from '@/components/ui/fields'
import RangeSlider from '@/components/ui/range-slider'

import { useFilterIngredients } from '@/hooks/useFilterIngredients'

import styles from './FilterMain.module.scss'

type Props = {
	className?: string
}

export const FilterMain = ({ className }: Props) => {
	const { ingredients, loading } = useFilterIngredients()

	const items = ingredients.map(item => ({
		value: String(item.id),
		text: item.name
	}))

	return (
		<>
			<Title text='Фильтрация' size='sm' className={styles.title} />
			<div className={styles.checkbox}>
				<FilterCheckbox text='Можно собирать' value='1' />
				<FilterCheckbox text='Новинки' value='2' />
			</div>
			<div className={styles.range}>
				<Title text='Цена от и до:' size='xs' className={styles.title} />
				<div className={styles.range__wrap}>
					<Input
						type='number'
						placeholder='0'
						min={0}
						max={1000}
						defaultValue={0}
					/>
					<Input type='number' placeholder='1000' min={100} max={1000} />
				</div>
				<RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
			</div>
			<div>
				<FilterGroupCheckbox
					title='Ингредиенты'
					limit={3}
					defaultItems={items.slice(0, 6)}
					items={items}
					loading={loading}
				/>
			</div>
		</>
	)
}
