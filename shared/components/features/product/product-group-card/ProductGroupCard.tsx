'use client'

import cn from 'clsx'
import { useEffect, useRef } from 'react'
import { useIntersection } from 'react-use'

import { Title } from '@/shared/components/ui/title'

import { ProductCard } from '@/shared/components/features/product'

import { useCategoryStore } from '@/shared/store/category'

import styles from './ProductGroupCard.module.scss'

type TProductGroupCard = {
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
}: TProductGroupCard) => {
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

	const productsList = items.map(item => (
		<ProductCard
			key={item.id}
			id={item.id}
			name={item.name}
			price={item.items[0].price}
			imageUrl={item.imageUrl}
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
