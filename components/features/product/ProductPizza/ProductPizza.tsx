'use client'

import { Ingredient, ProductItem } from '@prisma/client'
import cn from 'clsx'

import { Button } from '@/components/ui/Button'
import { Title } from '@/components/ui/Title'

import {
	ProductImage,
	ProductIngredient,
	ProductToggle
} from '@/components/features/Product'

import { usePizzaOptions } from '@/hooks/use-pizza-options'

import { TPizzaSize, TPizzaType, pizzaTypes } from '@/constants/pizza'

import { getPizzaDetails } from '@/lib/pizza'

import styles from './ProductPizza.module.scss'

type TProductPizzaProps = {
	imageUrl: string
	name: string
	ingredients: Ingredient[]
	items: ProductItem[]
	onSubmit: (itemId: number, ingredients: number[]) => void
	loading?: boolean
	className?: string
}

export function ProductPizza({
	imageUrl,
	name,
	ingredients,
	items,
	onSubmit,
	loading,
	className
}: TProductPizzaProps) {
	const {
		type,
		size,
		selectedIngredients,
		addIngredient,
		availableSizes,
		currentItemId,
		setSize,
		setType
	} = usePizzaOptions(items)

	const { totalPrice, textDetails } = getPizzaDetails(
		size,
		type,
		items,
		selectedIngredients,
		ingredients
	)

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

	const handleClickAdd = () => {
		if (currentItemId) {
			console.log(currentItemId, type, size, Array.from(selectedIngredients))
			onSubmit(currentItemId, Array.from(selectedIngredients))
		}
	}

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
						items={availableSizes}
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
					loading={loading}
					variant='default'
					onClick={handleClickAdd}
					className={styles.btn}
					size='default'
				>
					Добавить в корзину {totalPrice} ₽
				</Button>
			</div>
		</div>
	)
}
