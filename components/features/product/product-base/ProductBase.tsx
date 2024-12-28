import cn from 'clsx'

import { Button, Title } from '@/components/ui'

import styles from './ProductBase.module.scss'

interface IProductBase {
	imageUrl: string
	name: string
	price: number
	onSubmit?: VoidFunction
	loading?: boolean
	className?: string
}

export const ProductBase = ({
	imageUrl,
	name,
	price,
	onSubmit,
	loading,
	className
}: IProductBase) => {
	return (
		<div className={cn(styles.root, className)}>
			<div className={styles.image}>
				<img src={imageUrl} />
			</div>

			<div className={styles.content}>
				<Title text={name} className={styles.title} />
				<Button
					loading={loading}
					onClick={() => onSubmit?.()}
					variant='default'
					className={styles.btn}
					size='default'
				>
					Добавить в корзину {price} ₽
				</Button>
			</div>
		</div>
	)
}
