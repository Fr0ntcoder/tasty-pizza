import cn from 'clsx'
import { Suspense } from 'react'

import { Title } from '@/components/ui'

import { FilterMain } from '@/components/shared/filter'
import { ProductGroupCard } from '@/components/shared/product'
import { Stories } from '@/components/shared/stories'
import { TopBar } from '@/components/shared/top-bar'

import styles from './Home.module.scss'

interface Props {
	categories: any[]
	navigation: any[]
	className?: string
}

export function Home({ categories, navigation, className }: Props) {
	const list = categories.map(
		item =>
			item.products.length > 0 && (
				<ProductGroupCard
					key={item.id}
					title={item.name}
					categoryId={item.id}
					items={item.products}
				/>
			)
	)

	return (
		<div className={cn(styles.page, className)}>
			<Title text='Все пиццы' size='lg' className={styles.page__title} />
			<TopBar
				categories={navigation.filter(item => item.products.length > 0)}
			/>
			<Stories />
			<div className={styles.page__wrap}>
				<div className={styles.page__filters}>
					<Suspense>
						<FilterMain />
					</Suspense>
				</div>
				<div className={styles.page__content}>{list}</div>
			</div>
		</div>
	)
}
