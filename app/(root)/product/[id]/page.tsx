import { prisma } from '@/prisma/prisma-client'

import { ProductSingle } from '@/components/features/product-single'

export default async function ProductPage({
	params: { id }
}: {
	params: { id: string }
}) {
	const product = await prisma.product.findFirst({ where: { id: Number(id) } })

	return <ProductSingle product={product} />
}
