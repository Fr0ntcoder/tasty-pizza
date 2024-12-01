import cn from 'clsx'

import { ProductImage } from '@/shared/components/shared/product'
import Title from '@/shared/components/shared/title'

import Button from '@/shared/components/ui/button'

import styles from './ProductPizza.module.scss'

type TProductPizza = {
	imageUrl: string
	name: string
	ingredients: any
	items: any
	onClickAdd?: VoidFunction
	className?: string
}

export const ProductPizza = ({
	imageUrl,
	name,
	ingredients,
	items,
	onClickAdd,
	className
}: TProductPizza) => {
	const textDetails = 'какой-то текст'
	const totalPrice = 200
	return (
		<div className={cn(styles.root, className)}>
			<div className={styles.image}>
				<ProductImage imageUrl={imageUrl} size={20} />
			</div>
			<div className={styles.content}>
				<Title text={name} className={styles.title} />
				<p className={styles.text}>{textDetails}</p>
				<Button variant='default' onClick={onClickAdd}>
					Добавить в корзину {totalPrice} ₽
				</Button>
			</div>
		</div>
	)
}
