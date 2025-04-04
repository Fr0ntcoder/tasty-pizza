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

const updateStateCart = async (set: any, action: () => Promise<void>) => {
	try {
		set({ loading: true, error: false })
		await action()
	} catch (error) {
		console.error(error)
		set({ error: true })
	} finally {
		set({ loading: false })
	}
}

export const useCartStore = create<TCartState>((set, get) => ({
	items: [],
	error: false,
	loading: false,
	totalAmount: 0,

	fetchCartItems: async () => {
		await updateStateCart(set, async () => {
			const data = await Api.cart.getCart()
			const cartDetails = getCartDetails(data)
			set(cartDetails)
		})
	},
	removeCartItem: async (id: number) => {
		await updateStateCart(set, async () => {
			set(state => ({
				items: state.items.map(item =>
					item.id === id ? { ...item, disabled: true } : item
				)
			}))
			const data = await Api.cart.removeCartItem(id)
			const cartDetails = getCartDetails(data)
			set(cartDetails)
			set(state => ({
				items: state.items.map(item =>
					item.id === id ? { ...item, disabled: false } : item
				)
			}))
		})
	},
	updateItemQuantity: async (id: number, quantity: number) => {
		await updateStateCart(set, async () => {
			const data = await Api.cart.updateItemQuantity(id, quantity)
			const cartDetails = getCartDetails(data)
			set(cartDetails)
		})
	},
	addCartItem: async (values: ICreateCartItemValues) => {
		await updateStateCart(set, async () => {
			const data = await Api.cart.addCartItem(values)
			const cartDetails = getCartDetails(data)
			set(cartDetails)
		})
	}
}))
