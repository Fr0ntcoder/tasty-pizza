'use client'

import { Plus } from 'lucide-react'
import Link from 'next/link'

import { Button, Title } from '@/components/ui/elements'

import styles from './ProductCard.module.scss'

interface IProductCard {
	id: number
	name: string
	price: number
	imageUrl: string
	className?: string
}

export const ProductCard = ({
	id,
	name,
	price,
	imageUrl,
	className
}: IProductCard) => {
	return (
		<Link href={`/product/${id}`} className={styles.root}>
			<div className={styles.top}>
				<picture className={styles.top__image}>
					<img src={imageUrl} alt={name} />
				</picture>
			</div>
			<Title text={name} size='sm' className={styles.title} />
			<p className={styles.text}>
				Цыпленок,Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
				nam optio mollitia molestias
			</p>
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
