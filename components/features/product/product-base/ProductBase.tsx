import cn from 'clsx'

import { Button } from '@/components/ui/button'
import { Title } from '@/components/ui/title'

import styles from './ProductBase.module.scss'

interface IProductBaseProps {
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
}: IProductBaseProps) {
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
