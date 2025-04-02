interface Props {
	orderId: number
	totalAmount: number | null
	paymentUrl: string
}

export const PayOrder = ({ orderId, totalAmount, paymentUrl }: Props) => (
	<div>
		<h1>Заказ №{orderId}</h1>
		<p>
			Оплатите заказ на сумму {totalAmount} ₽. Перейдите{' '}
			<a href={paymentUrl}>по этой ссылке</a> для оплаты заказа
		</p>
	</div>
)
