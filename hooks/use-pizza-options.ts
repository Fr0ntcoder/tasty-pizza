import { ProductItem } from '@prisma/client'
import { useEffect, useState } from 'react'
import { useSet } from 'react-use'

import { TPizzaSize, TPizzaType } from '@/constants/pizza'

import { getPizzaSizes } from '@/lib/pizza'

import { TVariant } from '@/@types/product'

interface IPizzaOptions {
	size: TPizzaSize
	type: TPizzaType
	selectedIngredients: Set<number>
	availableSizes: TVariant[]
	setSize: (size: TPizzaSize) => void
	setType: (type: TPizzaType) => void
	addIngredient: (id: number) => void
	currentItemId?: number
}

export const usePizzaOptions = (items: ProductItem[]): IPizzaOptions => {
	const [size, setSize] = useState<TPizzaSize>(20)
	const [type, setType] = useState<TPizzaType>(1)
	const [selectedIngredients, { toggle: addIngredient }] = useSet(
		new Set<number>([])
	)

	const availableSizes = getPizzaSizes(type, items)
	const currentItemId = items.find(
		item => item.pizzaType === type && item.size === size
	)?.id

	useEffect(() => {
		const isAvailableSize = availableSizes.find(
			item => Number(item.value) === size && !item.disabled
		)

		const availableSize = availableSizes.find(item => !item.disabled)

		if (!isAvailableSize && availableSize) {
			setSize(Number(availableSize.value) as TPizzaSize)
		}
	}, [type])

	return {
		size,
		type,
		setSize,
		setType,
		availableSizes,
		selectedIngredients,
		addIngredient,
		currentItemId
	}
}
