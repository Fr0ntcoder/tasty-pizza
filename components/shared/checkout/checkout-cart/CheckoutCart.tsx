import { CheckoutCartItem } from '@/components/shared/checkout/checkout-cart/checkout-cart-item'
import { WhiteBlock } from '@/components/shared/white-block'

import { TPizzaSize, TPizzaType } from '@/constants/pizza'

import { TCartStateItem, getCartItems } from '@/lib/cart'

import styles from './CheckoutCart.module.scss'

interface Props {
	items: TCartStateItem[]
	removeCartItem: (id: number) => void
	onClickCountButton: (
		id: number,
		quantity: number,
		type: 'plus' | 'minus'
	) => void
	className?: string
}

export function CheckoutCart({
	items,
	removeCartItem,
	onClickCountButton,
	className
}: Props) {
	const cartItems = items.map(item => (
		<CheckoutCartItem
			id={item.id}
			imageUrl={item.imageUrl}
			details={getCartItems(
				item.ingredients,
				item.pizzaType as TPizzaType,
				item.pizzaSize as TPizzaSize
			)}
			name={item.name}
			price={item.price}
			quantity={item.quantity}
			onClickRemove={() => removeCartItem(item.id)}
			onClickCountButton={type =>
				onClickCountButton(item.id, item.quantity, type)
			}
		/>
	))
	return (
		<WhiteBlock title='1. Корзина' className={styles.cart}>
			<div className={styles.cart__wrap}>{cartItems}</div>
		</WhiteBlock>
	)
}
