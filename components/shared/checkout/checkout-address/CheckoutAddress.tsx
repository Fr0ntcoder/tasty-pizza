import { Controller, useFormContext } from 'react-hook-form'

import {
	FormAddress,
	FormTextError,
	FormTextarea
} from '@/components/shared/forms'
import { WhiteBlock } from '@/components/shared/white-block'

import styles from './CheckoutAddress.module.scss'

interface Props {
	className?: string
}

export function CheckoutAddress({ className }: Props) {
	const { control } = useFormContext()
	return (
		<WhiteBlock title='3. Адрес доставки' className={styles.address}>
			<Controller
				name='address'
				control={control}
				render={({ field, fieldState }) => (
					<div className={styles.address__block}>
						<FormAddress onChange={field.onChange} />
						{fieldState.error?.message && (
							<FormTextError text={fieldState.error.message} />
						)}
					</div>
				)}
			/>

			<FormTextarea
				name='comment'
				rows={5}
				className={styles.address__textarea}
				placeholder='Комментарий к заказу'
			/>
		</WhiteBlock>
	)
}
