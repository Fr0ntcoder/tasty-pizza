import cn from 'clsx'

import { Input, Textarea } from '@/components/ui/form-elements'
import { Title } from '@/components/ui/title'

import { WhiteBlock } from '@/components/shared/white-block'

import styles from './Checkout.module.scss'

interface ICheckout {
	className?: string
}

export function Checkout({ className }: ICheckout) {
	return (
		<div className={cn(styles.checkout, className)}>
			<Title
				text='Оформление заказа'
				size='lg'
				className={styles.checkout__title}
			/>
			<div className={styles.checkout__wrap}>
				<div className={styles.checkout__left}>
					<WhiteBlock title='1. Корзина'></WhiteBlock>
					<WhiteBlock
						title='2. Персональные данные'
						className={styles.personal}
					>
						<Input
							name='firstName'
							className={styles.personal__input}
							placeholder='Имя'
						/>
						<Input
							name='lastName'
							className={styles.personal__input}
							placeholder='Фамилия'
						/>
						<Input
							name='email'
							className={styles.personal__input}
							placeholder='E-mail'
						/>
						<Input
							name='phone'
							className={styles.personal__input}
							placeholder='Телефон'
						/>
					</WhiteBlock>
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
				</div>
				<div className={styles.checkout__right}>
					<WhiteBlock className={styles.total}>
						<div className={styles.total__top}></div>
						<span className={styles.total__text}>Итого:</span>
					</WhiteBlock>
				</div>
			</div>
		</div>
	)
}
