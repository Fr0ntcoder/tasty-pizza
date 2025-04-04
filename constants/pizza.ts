const mapPizzaSize = {
	20: 'Маленькая',
	30: 'Средняя',
	40: 'Большая'
} as const

const mapPizzaType = {
	1: 'традиционная',
	2: 'тонкая'
} as const

const pizzaSizes = Object.entries(mapPizzaSize).map(([value, name]) => ({
	name,
	value
}))

const pizzaTypes = Object.entries(mapPizzaType).map(([value, name]) => ({
	name,
	value
}))

export type TPizzaSize = keyof typeof mapPizzaSize
export type TPizzaType = keyof typeof mapPizzaType

export { mapPizzaSize, mapPizzaType, pizzaSizes, pizzaTypes }
