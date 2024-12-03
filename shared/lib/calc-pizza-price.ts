import { Ingredient, ProductItem } from '@prisma/client'

import { TPizzaSize, TPizzaType } from '@/shared/constants/pizza'

export const calcPizzaPrice = (
	type: TPizzaType,
	size: TPizzaSize,
	items: ProductItem[],
	ingredients: Ingredient[],
	selectedIngredients: Set<number>
) => {
	const pizzaPrice =
		items.find(item => item.pizzaType === type && item.size === size)?.price ||
		0
	const totalIngredientsPrice = ingredients
		.filter(item => selectedIngredients.has(item.id))
		.reduce((acc, item) => acc + item.price, 0)

	return pizzaPrice + totalIngredientsPrice
}
