import cn from 'clsx'

import { ProductCard } from '@/components/shared/product'
import Title from '@/components/shared/title'

import styles from './ProductGroupCard.module.scss'

type Props = {
	title: string
	items: any[]
	lastClassName?: string
	categoryId: number
	className?: string
}

export const ProductGroupCard = ({
	className,
	items,
	title,
	lastClassName,
	categoryId
}: Props) => {
	const productsList = items.map(item => (
		<ProductCard
			key={item.id}
			id={item.id}
			name={item.name}
			price={item.price}
			imageUrl={item.imageUrl}
		/>
	))
	return (
		<div className={cn(styles.root, className)}>
			<Title text={title} size='lg' className={styles.title} />
			<div className={styles.list}>{productsList}</div>
		</div>
	)
}
