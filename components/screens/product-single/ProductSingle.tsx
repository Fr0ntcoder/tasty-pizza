'use client'

import { ProductForm } from '@/components/shared/product'

import { IProductWithRelation } from '@/@types/product'

interface Props {
	product: IProductWithRelation | null
}

export function ProductSingle({ product }: Props) {
	return <ProductForm product={product} />
}
