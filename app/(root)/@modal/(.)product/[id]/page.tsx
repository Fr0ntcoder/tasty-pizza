import { prisma } from '@/prisma/prisma-client'

import { ProductModal } from '@/components/features/product'

export default async function ModalPage({
	params: { id }
}: {
	params: { id: string }
}) {
	const product = await prisma.product.findFirst({
		where: { id: Number(id) },
		include: {
			ingredients: true,
			items: true
		}
	})

	return <ProductModal product={product} />
}
