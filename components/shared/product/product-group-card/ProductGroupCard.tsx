'use client'

import cn from 'clsx'
import { useEffect, useRef } from 'react'
import { useIntersection } from 'react-use'

import { Title } from '@/components/ui/title'

import { useCategoryStore } from '@/store/category'

import { IProductWithRelation } from '@/@types/product'

import { ProductCard } from '../product-card'

import styles from './ProductGroupCard.module.scss'

interface Props {
	title: string
	items: IProductWithRelation[]
	lastClassName?: string
	categoryId: number
	className?: string
}

export function ProductGroupCard({
	className,
	items,
	title,
	lastClassName,
	categoryId
}: Props) {
	const setActiveCategoryId = useCategoryStore(state => state.setActiveId)
	const intersectionRef = useRef(null)
	const intersection = useIntersection(intersectionRef, {
		threshold: 0.4
	})

	useEffect(() => {
		if (intersection?.isIntersecting) {
			setActiveCategoryId(categoryId)
		}
	}, [categoryId, intersection?.isIntersecting])

	const productsList = items.map(product => (
		<ProductCard
			key={product.id}
			id={product.id}
			name={product.name}
			price={product.items[0].price}
			imageUrl={product.imageUrl}
			ingredients={product.ingredients}
		/>
	))
	return (
		<div
			className={cn(styles.card, className)}
			id={title}
			ref={intersectionRef}
		>
			<Title text={title} size='lg' className={styles.card__title} />
			<div className={styles.card__list}>{productsList}</div>
		</div>
	)
}
