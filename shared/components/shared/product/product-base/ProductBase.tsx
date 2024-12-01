import cn from 'clsx'

import Title from '@/shared/components/shared/title'

import Button from '@/shared/components/ui/button'

import styles from './ProductBase.module.scss'

type TProductBase = {
	imageUrl: string
	name: string
	onClickAdd?: VoidFunction
	className?: string
}

export const ProductBase = ({
	imageUrl,
	name,
	onClickAdd,
	className
}: TProductBase) => {
	const textDetails = 'какой-то текст'
	const totalPrice = 200
	return (
		<div className={cn(styles.root, className)}>
			<div className={styles.image}>
				<img src={imageUrl} />
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
