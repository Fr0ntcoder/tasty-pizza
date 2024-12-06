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

export type TCartDTO = {
	items: TCartItemDTO[]
} & Cart
