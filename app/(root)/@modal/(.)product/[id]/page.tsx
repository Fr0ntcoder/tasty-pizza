import { notFound } from 'next/navigation'

import { prisma } from '@/prisma/prisma-client'

import { ProductModal } from '@/shared/components/shared/modals'

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

	if (!product) {
		return notFound()
	}

	return <ProductModal product={product} />
}
