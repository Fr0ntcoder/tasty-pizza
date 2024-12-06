import { TCartItem } from '@/shared/components/features/cart/cart-item/types'

import { TCartDTO } from '@/shared/services/dto/cart.dto'

import { calcCartItem } from '@/shared/lib'

export type TCartStateItem = {
	id: number
	quantity: number
	name: string
	imageUrl: string
	price: number
	pizzaSize?: number | null
	pizzaType?: number | null
	ingredients: Array<{ name: string; price: number }>
}

export type TCartState = {
	loading: boolean
	error: boolean
	totalAmount: number
	items: TCartItem[]
	fetchCartitems: () => Promise<void>
	updateItemQuantity: (id: number, quantity: number) => Promise<void>
	addCartItem: (values: any) => Promise<void>
	removeCartItem: (id: number) => Promise<void>
}

type ReturnProps = {
	items: TCartStateItem[]
	totalAmount: number
}

export const getCartDetails = (data: TCartDTO): ReturnProps => {
	const items = data.items.map(item => ({
		id: item.id,
		quantity: item.quantity,
		name: item.productItem.product.name,
		imageUrl: item.productItem.product.imageUrl,
		price: calcCartItem(item),
		pizzaSize: item.productItem.size,
		pizzaType: item.productItem.pizzaType,
		ingredients: item.ingredients.map(ing => ({
			name: ing.name,
			price: ing.price
		}))
	}))

	return {
		items,
		totalAmount: data.totalAmount
	}
}
