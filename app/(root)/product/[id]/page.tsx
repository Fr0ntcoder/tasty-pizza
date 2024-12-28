import { Product } from '@prisma/client'

import { ProductSingle } from '@/components/screens/product-single'
import { prisma } from '@/prisma/prisma-client'



export default async function ProductPage({ params: { id } }: { params: { id: string } }) {

	const product: Product | null = await prisma.product.findFirst({
		where: { id: Number(id) }
	})



	return <ProductSingle product={product} />
}
