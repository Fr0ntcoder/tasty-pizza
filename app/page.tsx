import Categories from '@/components/shared/categories'
import Container from '@/components/shared/container'
import Title from '@/components/shared/title'

import styles from './Home.module.scss'

export default function Home() {
	return (
		<Container className={styles.root}>
			<Title text='Все пиццы' size='lg' className={styles.title} />
			<Categories />
		</Container>
	)
}
