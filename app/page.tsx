import Container from '@/components/shared/container'
import FilterMain from '@/components/shared/filters/filter-main'
import Title from '@/components/shared/title'
import TopBar from '@/components/shared/top-bar'

import styles from './Home.module.scss'

export default function Home() {
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
				<div className={styles.content}>
					<div className={styles.content__text}>Список товаров</div>
				</div>
			</Container>
		</>
	)
}
