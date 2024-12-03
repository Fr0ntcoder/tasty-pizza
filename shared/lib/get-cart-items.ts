import { Ingredient } from '@prisma/client'

import { TPizzaSize, TPizzaType, mapPizzaType } from '@/shared/constants/pizza'

export const getCartItems = (
	pizzaType: TPizzaType,
	pizzaSize: TPizzaSize,
	ingredients: Ingredient[]
): string => {
	const details = []

	if (pizzaSize && pizzaType) {
		const typeName = mapPizzaType[pizzaType]
		details.push(`${typeName} ${pizzaSize} см`)
	}

	if (ingredients) {
		details.push(...ingredients.map(ingredient => ingredient.name))
	}

	return details.join(', ')
}
