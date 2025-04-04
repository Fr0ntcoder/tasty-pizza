import { prisma } from '@/prisma/prisma-client'

import { ProductSingle } from '@/components/screens/product-single'

export default async function ProductPage({
	params: { id }
}: {
	params: { id: string }
}) {
	const product = await prisma.product.findFirst({
		where: { id: Number(id) },
		include: {
			ingredients: true,
			category: {
				include: {
					products: {
						include: {
							items: true
						}
					}
				}
			},
			items: true
		}
	})

	return <ProductSingle product={product} />
}
