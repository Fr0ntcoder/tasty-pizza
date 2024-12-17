import { useEffect } from 'react'

import { useCartStore } from '@/shared/store'

export const useCart = () => {
	const { items, totalAmount, fetchCartItems, updateItemQuantity } =
		useCartStore()

	useEffect(() => {
		fetchCartItems()
	}, [])

	const onUpdateQuantity = (
		id: number,
		quantity: number,
		type: 'plus' | 'minus'
	) => {
		const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1

		updateItemQuantity(id, newQuantity)
	}

	return { items, totalAmount, onUpdateQuantity }
}
