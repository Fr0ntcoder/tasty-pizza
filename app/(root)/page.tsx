import { Home } from '@/components/screens/home'

import { IGetSearchParams, findPizzas } from '@/lib/pizza/find-pizza'

export default async function HomePage({
	searchParams
}: {
	searchParams: IGetSearchParams
}) {
	const { categories, navList } = await findPizzas(searchParams)

	return <Home categories={categories} navigation={navList} />
}
