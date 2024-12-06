import { create } from 'zustand'

import { Api } from '@/shared/services/api-clients'

import { TCartStateItem, getCartDetails } from '@/shared/lib/get-cart-details'

export type TCartState = {
	loading: boolean
	error: boolean
	totalAmount: number
	items: TCartStateItem[]
	fetchCartItems: () => Promise<void>
	updateItemQuantity: (id: number, quantity: number) => Promise<void>
	addCartItem: (values: any) => Promise<void>
	removeCartItem: (id: number) => Promise<void>
}

export const useCartStore = create<TCartState>((set, get) => ({
	items: [],
	error: false,
	loading: false,
	totalAmount: 0,

	fetchCartItems: async () => {
		try {
			set({ loading: true, error: false })
			const data = await Api.cart.fetchCart()
			set(getCartDetails(data))
		} catch (error) {
			console.error(error)
			set({ error: true })
		} finally {
			set({ loading: false })
		}
	},
	removeCartItem: async (id: number) => {},
	updateItemQuantity: async (id: number, quantity: number) => {},
	addCartItem: async (values: any) => {}
}))
