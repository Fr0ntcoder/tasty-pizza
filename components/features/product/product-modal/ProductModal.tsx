'use client'

import { notFound, useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'

import { ProductBase, ProductPizza } from '@/components/features/product'

import { useCart } from '@/hooks'

import { type IProductWithRelation } from '@/@types/product'

import styles from './ProductModal.module.scss'

interface IProductModalProps {
	product: IProductWithRelation | null
	className?: string
}

export function ProductModal({ product, className }: IProductModalProps) {
	if (!product) {
		return notFound()
	}

	const router = useRouter()
	const firtsItem = product.items[0]
	const isPizza = Boolean(firtsItem.pizzaType)
	const { addCartItem, loading } = useCart()

	const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
		try {
			const itemId = productItemId ?? firtsItem.id

			await addCartItem({
				productItemId: itemId,
				ingredients
			})

			toast.success(`${product.name} добавлен в корзину`)
			router.back()
		} catch (error) {
			toast.error(`Ну удалось добавить ${product.name} в корзину`)
			console.log(error)
		}
	}

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
						onSubmit={onSubmit}
						loading={loading}
					/>
				) : (
					<ProductBase
						imageUrl={product.imageUrl}
						name={product.name}
						price={firtsItem.price}
						onSubmit={onSubmit}
						loading={loading}
					/>
				)}
			</DialogContent>
		</Dialog>
	)
}
