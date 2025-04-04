import { Story, StoryItem } from '@prisma/client'

import { axiosInstance } from '@/services/instance'

export type TStory = Story & {
	items: StoryItem[]
}
export const getAll = async () => {
	const { data } = await axiosInstance.get<TStory[]>('/stories')

	return data
}
