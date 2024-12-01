'use client'

import { useRouter } from 'next/navigation'

import { ProductBase, ProductPizza } from '@/shared/components/features/product'

import {
	Dialog,
	DialogContent,
	DialogTitle
} from '@/shared/components/ui/dialog'

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
						ingredients={[]}
						items={[]}
					/>
				) : (
					<ProductBase imageUrl={product.imageUrl} name={product.name} />
				)}
			</DialogContent>
		</Dialog>
	)
}
