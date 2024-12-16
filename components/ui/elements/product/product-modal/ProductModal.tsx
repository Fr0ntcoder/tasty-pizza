'use client'

import { notFound, useRouter } from 'next/navigation'

import {
	Dialog,
	DialogContent,
	DialogTitle
} from '@/components/ui/common/dialog'
import { ProductBase, ProductPizza } from '@/components/ui/elements/product'

import { IProductWithRelation } from '@/@types/product'

import styles from './ProductModal.module.scss'

interface IProductModal {
	product: IProductWithRelation | null
	className?: string
}

export const ProductModal = ({ product, className }: IProductModal) => {
	if (!product) {
		return notFound()
	}

	const router = useRouter()
	const isPizza = Boolean(product.items[0].pizzaType)

	return (
		<Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
			<DialogContent className={styles.content}>
				<DialogTitle />
				{isPizza ? (
					<ProductPizza
						imageUrl={product.imageUrl}
						name={product.name}
						ingredients={product.ingredients}
						items={product.items}
						onAddCart={undefined}
					/>
				) : (
					<ProductBase
						imageUrl={product.imageUrl}
						name={product.name}
						price={product.items[0].price}
					/>
				)}
			</DialogContent>
		</Dialog>
	)
}
