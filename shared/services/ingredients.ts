import { Ingredient } from '@prisma/client'

import { ApiRoutes } from './constants'
import { axiosInstance } from './instance'

export const getAll = async (): Promise<Ingredient[]> => {
	return (await axiosInstance<Ingredient[]>(ApiRoutes.INGREDIENTS)).data
}
