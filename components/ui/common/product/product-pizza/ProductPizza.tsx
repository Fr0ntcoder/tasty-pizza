'use client'

import { Ingredient, ProductItem } from '@prisma/client'
import cn from 'clsx'
import { useEffect, useState } from 'react'
import { useSet } from 'react-use'

import {
	ProductImage,
	ProductIngredient,
	ProductToggle
} from '@/components/ui/common/product'
import { Button, Title } from '@/components/ui/elements'

import {
	TPizzaSize,
	TPizzaType,
	mapPizzaType,
	pizzaSizes,
	pizzaTypes
} from '@/shared/constants/pizza'

import { calcPizzaPrice } from '@/shared/lib'

import styles from './ProductPizza.module.scss'

type TProductPizza = {
	imageUrl: string
	name: string
	ingredients: Ingredient[]
	items: ProductItem[]
	onAddCart?: VoidFunction
	className?: string
}

export const ProductPizza = ({
	imageUrl,
	name,
	ingredients,
	items,
	onAddCart,
	className
}: TProductPizza) => {
	const [size, setSize] = useState<TPizzaSize>(20)
	const [type, setType] = useState<TPizzaType>(1)
	const [selectedIngredients, { toggle: addIngredient }] = useSet(
		new Set<number>([])
	)

	const totalPrice = calcPizzaPrice(
		type,
		size,
		items,
		ingredients,
		selectedIngredients
	)
	const textDetails = `${size} см, ${mapPizzaType[type]} пицца, ингредиенты`

	const ingredientList = ingredients.map(item => (
		<ProductIngredient
			imageUrl={item.imageUrl}
			name={item.name}
			price={item.price}
			onClick={() => addIngredient(item.id)}
			key={item.id}
			active={selectedIngredients.has(item.id)}
		/>
	))

	const filtredPizza = items.filter(item => item.pizzaType === type)

	const availablePizzaSizes = pizzaSizes.map(item => ({
		name: item.name,
		value: item.value,
		disabled: !filtredPizza.some(
			pizza => Number(pizza.size) === Number(item.value)
		)
	}))

	const handleClickAdd = () => {
		onAddCart?.()
	}

	useEffect(() => {
		const isAvailableSize = availablePizzaSizes.find(
			item => Number(item.value) === size && !item.disabled
		)

		const availableSize = availablePizzaSizes.find(item => !item.disabled)

		if (!isAvailableSize && availableSize) {
			setSize(Number(availableSize.value) as TPizzaSize)
		}
	}, [type])

	return (
		<div className={cn(styles.root, className)}>
			<div className={styles.image}>
				<ProductImage imageUrl={imageUrl} size={size} />
			</div>
			<div className={styles.content}>
				<Title text={name} className={styles.title} />
				<p className={styles.text}>{textDetails}</p>
				<div className={styles.toggle}>
					<ProductToggle
						items={availablePizzaSizes}
						value={String(size)}
						onClick={value => setSize(Number(value) as TPizzaSize)}
					/>
					<ProductToggle
						items={pizzaTypes}
						value={String(type)}
						onClick={value => setType(Number(value) as TPizzaType)}
					/>
				</div>
				<div className={cn('scrollbar', styles.ingredients)}>
					{ingredientList}
				</div>
				<Button
					variant='default'
					onClick={onAddCart}
					className={styles.btn}
					size='default'
				>
					Добавить в корзину {totalPrice} ₽
				</Button>
			</div>
		</div>
	)
}
