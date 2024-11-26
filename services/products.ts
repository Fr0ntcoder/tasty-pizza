import { Product } from '@prisma/client'

import { ApiRoutes } from './constants'
import { axiosInstance } from './instance'

export const search = async (query: string): Promise<Product[]> => {
	return (
		await axiosInstance<Product[]>(ApiRoutes.SEARCH_PRODUCTS, {
			params: { query }
		})
	).data
}
