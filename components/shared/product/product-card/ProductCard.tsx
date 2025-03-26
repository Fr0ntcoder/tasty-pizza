'use client'

import { Ingredient } from '@prisma/client'
import { Plus } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Title } from '@/components/ui/title'

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
		<Link href={`/product/${id}`} className={styles.card}>
			<div className={styles.card__top}>
				<picture className={styles.card__img}>
					<img src={imageUrl} alt={name} />
				</picture>
			</div>
			<Title text={name} size='sm' className={styles.card__title} />
			<p className={styles.card__text}>{ingredientsList}</p>
			<div className={styles.card__bottom}>
				<span className={styles.card__price}>
					от <b>{price} ₽</b>
				</span>
				<Button variant='default' size='default' className={styles.card__btn}>
					<Plus size={20} strokeWidth={2} /> Добавить
				</Button>
			</div>
		</Link>
	)
}
