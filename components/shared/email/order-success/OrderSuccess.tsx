import { ICartItem } from '@/@types/cart'

interface Props {
	orderId: number
	items: ICartItem[]
}

export const OrderSuccess = ({ orderId, items }: Props) => (
	<div>
		<h1>Спасибо за покупку!</h1>
		<p>Ваш заказ # ${orderId} оплачен! Список товаров: </p>
		<ul>
			{items.map(item => (
				<li key={item.id}>
					{item.name} - {item.price} руб.
				</li>
			))}
		</ul>
	</div>
)
