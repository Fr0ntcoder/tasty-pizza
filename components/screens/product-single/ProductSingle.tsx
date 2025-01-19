import { Product } from '@prisma/client'
import { notFound } from 'next/navigation'

import { Container } from '@/components/ui/container'
import { Title } from '@/components/ui/title'

import { ProductImage, ProductToggle } from '@/components/features/product'

import styles from './ProductSingle.module.scss'

interface IProductSingleProps {
	product: Product | null
	className?: string
}

export function ProductSingle({ className, product }: IProductSingleProps) {
	if (!product) {
		return notFound()
	}

	return (
		<Container>
			<div className={styles.wrap}>
				<div className={styles.image}>
					<ProductImage imageUrl={product.imageUrl} size={20} />
				</div>
				<div className={styles.content}>
					<Title text={product.name} size='md' className={styles.title} />
					<div className={styles.details}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae minus
						neque libero, sapiente dicta dolorem.
					</div>
					<ProductToggle
						value='2'
						items={[
							{
								name: 'Маленькая',
								value: '1'
							},
							{
								name: 'Средняя',
								value: '2'
							},
							{
								name: 'Большая',
								value: '3',
								disabled: true
							}
						]}
					/>
				</div>
			</div>
		</Container>
	)
}
