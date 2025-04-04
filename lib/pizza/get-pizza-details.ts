import { Ingredient, ProductItem } from '@prisma/client'

import {
	type TPizzaSize,
	type TPizzaType,
	mapPizzaType
} from '@/constants/pizza'

import { calcPizzaPrice } from '@/lib/pizza'

export const getPizzaDetails = (
	size: TPizzaSize,
	type: TPizzaType,
	items: ProductItem[],
	selectedIngredients: Set<number>,
	ingredients: Ingredient[]
) => {
	const totalPrice = calcPizzaPrice(
		type,
		size,
		items,
		ingredients,
		selectedIngredients
	)

	const textDetails = `${size} см, ${mapPizzaType[type]} пицца, ингредиенты`

	return { totalPrice, textDetails }
}
