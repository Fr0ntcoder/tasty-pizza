import { TCartItemDTO } from '@/shared/services/dto/cart.dto'

export const calcCartItem = (item: TCartItemDTO): number => {
	const ingredientsPrice = item.ingredients.reduce(
		(acc, ing) => acc + ing.price,
		0
	)
	return (ingredientsPrice + item.productItem.price) * item.quantity
}
