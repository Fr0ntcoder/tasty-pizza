import cn from 'clsx'
import { CircleCheck } from 'lucide-react'
import Image from 'next/image'

import { Title } from '@/components/ui/title'

import styles from './ProductPizzaIngredient.module.scss'

interface Props {
	imageUrl: string
	name: string
	price: number
	active?: boolean
	onClick?: () => void
	className?: string
}

export function ProductPizzaIngredient({
	imageUrl,
	name,
	price,
	active,
	onClick,
	className
}: Props) {
	return (
		<div
			className={cn(
				styles.ingredient,
				{ [styles['ingredient--active']]: active },
				className
			)}
			onClick={onClick}
		>
			{active && <CircleCheck size={16} className={styles.ingredient__check} />}
			<Image
				src={imageUrl}
				alt={name}
				width={80}
				height={80}
				className={styles.ingredient__img}
			/>
			<Title text={name} size='xs' className={styles.ingredient__title} />
			<span className={styles.ingredient__price}>{price} ₽</span>
		</div>
	)
}
