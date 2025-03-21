'use client'

import cn from 'clsx'
import { useEffect, useRef } from 'react'
import { useIntersection } from 'react-use'

import { Title } from '@/components/ui/Title'

import { ProductCard } from '@/components/features/Product'

import { useCategoryStore } from '@/store/category'

import { IProductWithRelation } from '@/@types/product'

import styles from './ProductGroupCard.module.scss'

interface IProductGroupCardProps {
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
}: IProductGroupCardProps) {
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
			className={cn(styles.root, className)}
			id={title}
			ref={intersectionRef}
		>
			<Title text={title} size='lg' className={styles.title} />
			<div className={styles.list}>{productsList}</div>
		</div>
	)
}
