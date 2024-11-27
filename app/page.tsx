import Container from '@/components/shared/container'
import { FilterMain } from '@/components/shared/filters'
import { ProductGroupCard } from '@/components/shared/product'
import Title from '@/components/shared/title'
import TopBar from '@/components/shared/top-bar'

import styles from './Home.module.scss'
import { prisma } from '@/prisma/prisma-client'

export default async function Home() {
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
	console.log(categories)
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
			<TopBar />
			<Container className={styles.container}>
				<div className={styles.filters}>
					<FilterMain />
				</div>
				<div className={styles.content}>{list}</div>
			</Container>
		</>
	)
}
