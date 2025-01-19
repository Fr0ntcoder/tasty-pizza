import { ApiRoutes } from '@/services/constants'
import {
	type ICartDTO,
	type ICreateCartItemValues
} from '@/services/dto/cart.dto'
import { axiosInstance } from '@/services/instance'

export const getCart = async (): Promise<ICartDTO> => {
	const { data } = await axiosInstance.get<ICartDTO>(ApiRoutes.CART)

	return data
}

export const updateItemQuantity = async (
	id: number,
	quantity: number
): Promise<ICartDTO> => {
	const { data } = await axiosInstance.patch<ICartDTO>(
		`${ApiRoutes.CART}/${id}`,
		{ quantity }
	)

	return data
}

export const removeCartItem = async (id: number): Promise<ICartDTO> => {
	const { data } = await axiosInstance.delete<ICartDTO>(
		`${ApiRoutes.CART}/${id}`
	)

	return data
}

export const addCartItem = async (
	values: ICreateCartItemValues
): Promise<ICartDTO> => {
	const { data } = await axiosInstance.post<ICartDTO>(
		`${ApiRoutes.CART}`,
		values
	)

	return data
}
