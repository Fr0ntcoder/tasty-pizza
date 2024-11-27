import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { useSet } from 'react-use'

type PriceProps = {
	priceFrom?: number
	priceTo?: number
}

type QueryFilters = {
	pizzaTypes: string
	pizzaSizes: string
	ingredients: string
} & PriceProps

export type Filters = {
	pizzaSizes: Set<string>
	pizzaTypes: Set<string>
	selectedIngredients: Set<string>
	prices: PriceProps
}

export type ReturnProps = {
	setPrices: (name: keyof PriceProps, value: number) => void
	setPizzaTypes: (value: string) => void
	setPizzaSizes: (value: string) => void
	setSelectedIngredients: (value: string) => void
} & Filters

export const useFilters = (): ReturnProps => {
	const router = useRouter()
	const searchParams = useSearchParams() as unknown as Map<
		keyof QueryFilters,
		string
	>

	const [selectedIngredients, { toggle: toogleIngredients }] = useSet(
		new Set<string>(searchParams.get('ingredients')?.split(','))
	)

	const [pizzaSizes, { toggle: togglePizzaSizes }] = useSet(
		new Set<string>(
			searchParams.has('pizzaSizes')
				? searchParams.get('pizzaSizes')?.split(',')
				: []
		)
	)
	const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
		new Set<string>(
			searchParams.has('pizzaTypes')
				? searchParams.get('pizzaTypes')?.split(',')
				: []
		)
	)

	const [prices, setPrices] = useState<PriceProps>({
		priceFrom: Number(searchParams.get('priceFrom')) || undefined,
		priceTo: Number(searchParams.get('priceTo')) || undefined
	})

	const onChangePrice = (name: keyof PriceProps, value: number) => {
		setPrices(prev => ({
			...prev,
			[name]: value
		}))
	}

	return {
		pizzaSizes,
		pizzaTypes,
		selectedIngredients,
		prices,
		setPrices: onChangePrice,
		setPizzaSizes: togglePizzaSizes,
		setPizzaTypes: togglePizzaTypes,
		setSelectedIngredients: toogleIngredients
	}
}
