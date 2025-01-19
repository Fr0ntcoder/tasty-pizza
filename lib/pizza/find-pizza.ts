export interface IGetSearchParams {
	query?: string
	sortBy?: string
	sizes?: string
	pizzaTypes?: string
	ingredients?: string
	priceForm?: string
	priceTo?: string
}

const DEFAULT_MIN_PRICE = 0
const DEFAULT_MAX_PRICE = 1000

export const findPizzas = async (params: IGetSearchParams) => {
	const sizes = params.sizes?.split(',').map(Number)
	const pizzaTypes = params.pizzaTypes?.split(',').map(Number)
	const ingredientsArr = params.ingredients?.split(',').map(Number)
}
