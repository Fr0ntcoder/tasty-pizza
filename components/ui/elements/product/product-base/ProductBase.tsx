import cn from 'clsx'

import { Button } from '@/components/ui/common/button'
import { Title } from '@/components/ui/common/title'

import styles from './ProductBase.module.scss'

interface IProductBase {
	imageUrl: string
	name: string
	price: number
	onClickAdd?: VoidFunction
	className?: string
}

export const ProductBase = ({
	imageUrl,
	name,
	price,
	onClickAdd,
	className
}: IProductBase) => {
	return (
		<div className={cn(styles.root, className)}>
			<div className={styles.image}>
				<img src={imageUrl} />
			</div>

			<div className={styles.content}>
				<Title text={name} className={styles.title} />
				<Button variant='default' className={styles.btn} size='default'>
					Добавить в корзину {price} ₽
				</Button>
			</div>
		</div>
	)
}
