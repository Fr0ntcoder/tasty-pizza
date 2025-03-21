'use client'

import { Ingredient } from '@prisma/client'
import { Plus } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/Button'
import { Title } from '@/components/ui/Title'

import styles from './ProductCard.module.scss'

interface IProductCardProps {
	id: number
	name: string
	price: number
	imageUrl: string
	ingredients: Ingredient[]
	className?: string
}

export function ProductCard({
	id,
	name,
	price,
	imageUrl,
	ingredients,
	className
}: IProductCardProps) {
	const ingredientsList = ingredients
		.map(ingredient => ingredient.name)
		.join(', ')

	return (
		<Link href={`/product/${id}`} className={styles.root}>
			<div className={styles.top}>
				<picture className={styles.top__image}>
					<img src={imageUrl} alt={name} />
				</picture>
			</div>
			<Title text={name} size='sm' className={styles.title} />
			<p className={styles.text}>{ingredientsList}</p>
			<div className={styles.bottom}>
				<span className={styles.bottom__price}>
					от <b>{price} ₽</b>
				</span>
				<Button variant='default' size='default' className={styles.bottom__btn}>
					<Plus size={20} strokeWidth={2} /> Добавить
				</Button>
			</div>
		</Link>
	)
}
