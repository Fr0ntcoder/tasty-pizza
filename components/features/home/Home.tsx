import cn from 'clsx'

import { Container, Title } from '@/components/ui/common'
import { ProductGroupCard } from '@/components/ui/elements/product'

import { FilterMain } from './filter/FilterMain'
import { TopBar } from './top-bar/TopBar'

import styles from './Home.module.scss'

interface IHome {
	categories: any[]
	className?: string
}

export const Home = ({ className, categories }: IHome) => {
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
					<FilterMain />
				</div>
				<div className={styles.content}>{list}</div>
			</Container>
		</div>
	)
}
