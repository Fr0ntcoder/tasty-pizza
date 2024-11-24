import Container from '@/components/shared/container'
import { FilterMain } from '@/components/shared/filters'
import { ProductGroupCard } from '@/components/shared/product'
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
					<ProductGroupCard
						title='Пиццы'
						items={[
							{
								id: 1,
								name: 'Чизубергер1',
								imageUrl: '/assets/ingredients/kubiki-brynzy.png',
								price: 350,
								items: [{ prise: 350 }]
							},
							{
								id: 2,
								name: 'Чизубергер2',
								imageUrl:
									'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
								price: 450,
								items: [{ prise: 350 }]
							},
							{
								id: 3,
								name: 'Чизубергер3',
								imageUrl:
									'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
								price: 270,
								items: [{ prise: 350 }]
							},
							{
								id: 4,
								name: 'Чизубергер4',
								imageUrl:
									'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
								price: 260,
								items: [{ prise: 350 }]
							}
						]}
						categoryId={1}
					/>
					<ProductGroupCard
						title='Комбо'
						items={[
							{
								id: 1,
								name: 'Чизубергер1',
								imageUrl:
									'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
								price: 350,
								items: [{ prise: 350 }]
							},
							{
								id: 2,
								name: 'Чизубергер2',
								imageUrl:
									'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
								price: 450,
								items: [{ prise: 350 }]
							},
							{
								id: 3,
								name: 'Чизубергер3',
								imageUrl:
									'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
								price: 270,
								items: [{ prise: 350 }]
							},
							{
								id: 4,
								name: 'Чизубергер4',
								imageUrl:
									'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
								price: 260,
								items: [{ prise: 350 }]
							}
						]}
						categoryId={2}
					/>
					<ProductGroupCard
						title='Закуски'
						items={[
							{
								id: 1,
								name: 'Чизубергер1',
								imageUrl:
									'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
								price: 350,
								items: [{ prise: 350 }]
							},
							{
								id: 2,
								name: 'Чизубергер2',
								imageUrl:
									'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
								price: 450,
								items: [{ prise: 350 }]
							},
							{
								id: 3,
								name: 'Чизубергер3',
								imageUrl:
									'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
								price: 270,
								items: [{ prise: 350 }]
							},
							{
								id: 4,
								name: 'Чизубергер4',
								imageUrl:
									'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
								price: 260,
								items: [{ prise: 350 }]
							}
						]}
						categoryId={3}
					/>
					<ProductGroupCard
						title='Коктейли'
						items={[
							{
								id: 1,
								name: 'Чизубергер1',
								imageUrl:
									'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
								price: 350,
								items: [{ prise: 350 }]
							},
							{
								id: 2,
								name: 'Чизубергер2',
								imageUrl:
									'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
								price: 450,
								items: [{ prise: 350 }]
							},
							{
								id: 3,
								name: 'Чизубергер3',
								imageUrl:
									'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
								price: 270,
								items: [{ prise: 350 }]
							},
							{
								id: 4,
								name: 'Чизубергер4',
								imageUrl:
									'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
								price: 260,
								items: [{ prise: 350 }]
							}
						]}
						categoryId={4}
					/>
				</div>
			</Container>
		</>
	)
}
