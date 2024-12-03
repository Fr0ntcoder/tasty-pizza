import { notFound } from 'next/navigation'

import { prisma } from '@/prisma/prisma-client'

import { Container, Title } from '@/shared/components/ui'

import { ProductImage } from '@/shared/components/features/product'
import ToogleVariants from '@/shared/components/features/toogle-variants'

import styles from './ProductPage.module.scss'

export default async function ProductPage({
	params: { id }
}: {
	params: { id: string }
}) {
	const product = await prisma.product.findFirst({ where: { id: Number(id) } })

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
					<ToogleVariants
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
