import { create } from 'zustand'

import { Api } from '@/services/api-clients'
import { ICreateCartItemValues } from '@/services/dto/cart.dto'

import { TCartStateItem, getCartDetails } from '@/lib/cart/get-cart-details'

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
			const data = await Api.cart.getCart()
			const cartDetails = getCartDetails(data)
			set(cartDetails)
		} catch (error) {
			console.error(error)
			set({ error: true })
		} finally {
			set({ loading: false })
		}
	},
	removeCartItem: async (id: number) => {
		try {
			set({ loading: true, error: false })
			const data = await Api.cart.removeCartItem(id)
			const cartDetails = getCartDetails(data)
			set(cartDetails)
		} catch (error) {
			console.error(error)
			set({ error: true })
		} finally {
			set({ loading: false })
		}
	},
	updateItemQuantity: async (id: number, quantity: number) => {
		try {
			set({ loading: true, error: false })
			const data = await Api.cart.updateItemQuantity(id, quantity)
			const cartDetails = getCartDetails(data)
			set(cartDetails)
		} catch (error) {
			console.error(error)
			set({ error: true })
		} finally {
			set({ loading: false })
		}
	},
	addCartItem: async (values: ICreateCartItemValues) => {
		try {
			set({ loading: true, error: false })
			const data = await Api.cart.addCartItem(values)
			const cartDetails = getCartDetails(data)
			set(cartDetails)
		} catch (error) {
			console.error(error)
			set({ error: true })
		} finally {
			set({ loading: false })
		}
	}
}))
