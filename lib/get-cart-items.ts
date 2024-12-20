import { TPizzaSize, TPizzaType, mapPizzaType } from '@/constants/pizza'
import { TCartStateItem } from '@/lib/get-cart-details'

export const getCartItems = (
	ingredients: TCartStateItem['ingredients'],
	pizzaType: TPizzaType,
	pizzaSize: TPizzaSize
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
