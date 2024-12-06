import { TCartDTO } from '@/shared/services/dto/cart.dto'
import { axiosInstance } from '@/shared/services/instance'

export const fetchCart = async (): Promise<TCartDTO> => {
	const { data } = await axiosInstance.get<TCartDTO>('/cart')

	return data
}
