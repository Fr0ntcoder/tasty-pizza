import { ApiRoutes } from '@/shared/services/constants'
import { TCartDTO } from '@/shared/services/dto/cart.dto'
import { axiosInstance } from '@/shared/services/instance'

export const getCart = async (): Promise<TCartDTO> => {
	const { data } = await axiosInstance.get<TCartDTO>(ApiRoutes.CART)

	return data
}

export const updateItemQuantity = async (
	id: number,
	quantity: number
): Promise<TCartDTO> => {
	const { data } = await axiosInstance.patch<TCartDTO>(
		`${ApiRoutes.CART}/${id}`,
		{ quantity }
	)

	return data
}
