import { ProductItem } from '@prisma/client'

import { type TPizzaType, pizzaSizes } from '@/constants/pizza'

import { type TVariant } from '@/@types/product'

export const getPizzaSizes = (
	type: TPizzaType,
	items: ProductItem[]
): TVariant[] => {
	const filtredPizza = items.filter(item => item.pizzaType === type)

	return pizzaSizes.map(item => ({
		name: item.name,
		value: item.value,
		disabled: !filtredPizza.some(
			pizza => Number(pizza.size) === Number(item.value)
		)
	}))
}
