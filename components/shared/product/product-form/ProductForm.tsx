'use client'

import { notFound, useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

import { useCart } from '@/hooks'

import { IProductWithRelation } from '@/@types/product'

import { ProductBase } from './product-base'
import { ProductPizza } from './product-pizza'

interface IProductForm {
	product: IProductWithRelation | null
	onSubmit?: VoidFunction
	className?: string
}

export function ProductForm({
	className,
	product,
	onSubmit: _onSubmit
}: IProductForm) {
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
			_onSubmit?.()
		} catch (error) {
			toast.error(`Ну удалось добавить ${product.name} в корзину`)
			console.log(error)
		}
	}
	return (
		<>
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
		</>
	)
}
