import Skeleton from 'react-loading-skeleton'

import { Title } from '@/components/ui'

import { IFilterCheckbox } from '@/components/shared/filter/filter-checkbox'

import styles from './FilterSkeleton.module.scss'

interface Props {
	className?: string
	title: string
	limit?: number
	items: IFilterCheckbox[]
}

export function FilterSkeleton({ items, title, limit, className }: Props) {
	return (
		<div className={styles.skeleton}>
			<Title text={title} size='xs' className={styles.skeleton__title} />

			<Skeleton
				className={styles.skeleton__block}
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
