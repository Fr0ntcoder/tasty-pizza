import { Ingredient, Product, ProductItem } from '@prisma/client'

export interface IProductWithRelation extends Product {
	items: ProductItem[]
	ingredients: Ingredient[]
}
