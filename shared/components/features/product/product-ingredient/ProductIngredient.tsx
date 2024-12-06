import cn from 'clsx'
import { CircleCheck } from 'lucide-react'
import Image from 'next/image'

import { Title } from '@/shared/components/ui/title'

import styles from './ProductIngredient.module.scss'

type TProductIngredient = {
	imageUrl: string
	name: string
	price: number
	active?: boolean
	onClick?: () => void
	className?: string
}

export const ProductIngredient = ({
	imageUrl,
	name,
	price,
	active,
	onClick,
	className
}: TProductIngredient) => {
	return (
		<div
			className={cn(styles.root, { [styles.active]: active }, className)}
			onClick={onClick}
		>
			{active && <CircleCheck size={16} className={styles.check} />}
			<Image
				src={imageUrl}
				alt={name}
				width={80}
				height={80}
				className={styles.image}
			/>
			<Title text={name} size='xs' className={styles.title} />
			<span className={styles.price}>{price} ₽</span>
		</div>
	)
}
