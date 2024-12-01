import { Ingredient, Product, ProductItem } from '@prisma/client'

export type TProductWithRelation = {
	items: ProductItem[]
	ingredients: Ingredient[]
} & Product
