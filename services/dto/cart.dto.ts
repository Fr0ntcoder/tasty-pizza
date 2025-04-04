import {
	Cart,
	CartItem,
	Ingredient,
	Product,
	ProductItem
} from '@prisma/client'

export type TCartItemDTO = CartItem & {
	productItem: ProductItem & {
		product: Product
	}
	ingredients: Ingredient[]
}

export interface ICartDTO extends Cart {
	items: TCartItemDTO[]
}

export interface ICreateCartItemValues {
	productItemId: number
	ingredients?: number[]
}
