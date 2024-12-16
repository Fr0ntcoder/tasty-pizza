import { prisma } from '@/prisma/prisma-client'

import { Home } from '@/components/features/home'

export default async function HomePage() {
	const categories = await prisma.category.findMany({
		include: {
			products: {
				include: {
					ingredients: true,
					items: true
				}
			}
		}
	})

	return <Home categories={categories} />
}
