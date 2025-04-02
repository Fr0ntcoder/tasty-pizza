import { FormInput } from '@/components/shared/forms'
import { WhiteBlock } from '@/components/shared/white-block'

import styles from './CheckoutPersonal.module.scss'

interface Props {
	className?: string
}

export function CheckoutPersonal({ className }: Props) {
	return (
		<WhiteBlock title='2. Персональные данные' className={styles.personal}>
			<div className={styles.personal__wrap}>
				<FormInput name='firstName' placeholder='Введите имя' />
				<FormInput name='lastName' placeholder='Введите вамилию' />
				<FormInput name='email' placeholder='E-mail' />
				<FormInput name='phone' placeholder='Телефон' />
			</div>
		</WhiteBlock>
	)
}
