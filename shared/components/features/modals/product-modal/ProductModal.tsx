'use client'

import { useRouter } from 'next/navigation'

import {
	Dialog,
	DialogContent,
	DialogTitle
} from '@/shared/components/ui/dialog'

import { ProductBase, ProductPizza } from '@/shared/components/features/product'

import { TProductWithRelation } from '@/@types/product'

import styles from './ProductModal.module.scss'

type TProductModal = {
	product: TProductWithRelation
	className?: string
}

export const ProductModal = ({ product, className }: TProductModal) => {
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
