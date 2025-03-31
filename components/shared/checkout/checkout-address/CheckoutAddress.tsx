import { Input, Textarea } from '@/components/ui/form-elements'

import { WhiteBlock } from '@/components/shared/white-block'

import styles from './CheckoutAddress.module.scss'

interface Props {
	className?: string
}

export function CheckoutAddress({ className }: Props) {
	return (
		<WhiteBlock title='3. Адрес доставки' className={styles.address}>
			<Input
				name='address'
				className={styles.address__input}
				placeholder='Введите адрес'
			/>
			<Textarea
				rows={5}
				className={styles.address__textarea}
				placeholder='Комментарий к заказу'
			/>
		</WhiteBlock>
	)
}
