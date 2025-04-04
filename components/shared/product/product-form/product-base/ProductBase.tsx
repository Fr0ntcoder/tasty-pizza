import cn from 'clsx'

import { Button, Title } from '@/components/ui'

import styles from './ProductBase.module.scss'

interface Props {
	imageUrl: string
	name: string
	price: number
	onSubmit?: VoidFunction
	loading?: boolean
	className?: string
}

export function ProductBase({
	imageUrl,
	name,
	price,
	onSubmit,
	loading,
	className
}: Props) {
	return (
		<div className={cn(styles.product, className)}>
			<div className={styles.product__img}>
				<img src={imageUrl} />
			</div>

			<div className={styles.product__content}>
				<Title text={name} className={styles.product__title} />
				<Button
					loading={loading}
					onClick={() => onSubmit?.()}
					variant='default'
					className={styles.product__btn}
					size='default'
				>
					Добавить в корзину {price} ₽
				</Button>
			</div>
		</div>
	)
}
