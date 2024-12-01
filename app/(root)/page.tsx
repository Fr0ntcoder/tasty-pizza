import { prisma } from '@/prisma/prisma-client'

import { Container, Title } from '@/shared/components/ui'

import { FilterMain } from '@/shared/components/features/filters'
import { ProductGroupCard } from '@/shared/components/features/product'
import TopBar from '@/shared/components/features/top-bar'

import styles from './Home.module.scss'

export default async function HomePage() {
	const categories = await prisma.category.findMany({
		include: {
			products: {
				include: {
					ingredients: true,
					items: true
				}
			}
		}
	})
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
		<>
			<Container className={styles.root}>
				<Title text='Все пиццы' size='lg' className={styles.title} />
			</Container>
			<TopBar
				categories={categories.filter(item => item.products.length > 0)}
			/>
			<Container className={styles.container}>
				<div className={styles.filters}>
					<FilterMain />
				</div>
				<div className={styles.content}>{list}</div>
			</Container>
		</>
	)
}
