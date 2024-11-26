import { Ingredient } from '@prisma/client'
import { useEffect, useState } from 'react'

import { Api } from '@/services/api-clients'

type ReturnProps = {
	ingredients: Ingredient[]
	loading: boolean
}

export const useFilterIngredients = (): ReturnProps => {
	const [ingredients, setIngredients] = useState<Ingredient[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		async function getIngredients() {
			try {
				setLoading(true)
				const response = await Api.ingredients.getAll()
				setIngredients(response)
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}
		}

		getIngredients()
	}, [])

	return { ingredients, loading }
}
