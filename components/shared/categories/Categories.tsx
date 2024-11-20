import cn from 'clsx'

import styles from './Categories.module.scss'

type Props = {
	className?: string
}

const categories = [
	'Пиццы',
	'Комбо',
	'Закуски',
	'Коктейли',
	'Кофе',
	'Напитки',
	'Десерты'
]
const activeIndex = 0

export const Categories = ({ className }: Props) => {
	const categoriesList = categories.map((item, i) => (
		<button
			key={i}
			className={cn(styles.item, activeIndex === i && styles.active)}
		>
			{item}
		</button>
	))
	return <div className={cn(styles.list)}>{categoriesList}</div>
}
