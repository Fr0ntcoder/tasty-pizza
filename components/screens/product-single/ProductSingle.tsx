'use client'

import { ProductForm } from '@/components/shared/product'

import { IProductWithRelation } from '@/@types/product'

interface IProductSingleProps {
	product: IProductWithRelation | null
}

export function ProductSingle({ product }: IProductSingleProps) {
	return <ProductForm product={product} />
}
