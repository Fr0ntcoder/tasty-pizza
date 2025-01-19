import cn from 'clsx'
import { Suspense } from 'react'

import { Container } from '@/components/ui/container'
import { Title } from '@/components/ui/title'

import { FilterMain } from '@/components/features/filter'
import { ProductGroupCard } from '@/components/features/product'
import { TopBar } from '@/components/features/top-bar'

import styles from './Home.module.scss'

interface IHomeProps {
	categories: any[]
	className?: string
}

export function Home({ className, categories }: IHomeProps) {
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
		<div className={cn(styles.root, className)}>
			<Container className={styles.root}>
				<Title text='Все пиццы' size='lg' className={styles.title} />
			</Container>
			<TopBar
				categories={categories.filter(item => item.products.length > 0)}
			/>
			<Container className={styles.container}>
				<div className={styles.filters}>
					<Suspense>
						<FilterMain />
					</Suspense>
				</div>
				<div className={styles.content}>{list}</div>
			</Container>
		</div>
	)
}
