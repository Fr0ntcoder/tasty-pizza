import { notFound } from 'next/navigation'

import { prisma } from '@/prisma/prisma-client'

import Container from '@/components/shared/container'
import { ProductImage } from '@/components/shared/product'
import Title from '@/components/shared/title'
import ToogleVariants from '@/components/shared/toogle-variants'

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
				<ProductImage imageUrl={product.imageUrl} size={20} />
				<div className={styles.content}>
					<Title text={product.name} size='md' className={styles.title} />
					<div className={styles.details}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae minus
						neque libero, sapiente dicta dolorem.
					</div>
					<ToogleVariants
						selectedValue='2'
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
