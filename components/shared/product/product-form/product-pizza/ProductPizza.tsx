'use client'

import { Ingredient, ProductItem } from '@prisma/client'
import cn from 'clsx'

import { Button } from '@/components/ui/button'
import { Title } from '@/components/ui/title'

import { usePizzaOptions } from '@/hooks/use-pizza-options'

import { TPizzaSize, TPizzaType, pizzaTypes } from '@/constants/pizza'

import { getPizzaDetails } from '@/lib/pizza'

import { ProductPizzaImage } from './product-pizza-image'
import { ProductPizzaIngredient } from './product-pizza-ingredient'
import { ProductPizzaToggle } from './product-pizza-toggle'

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
		<ProductPizzaIngredient
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
		<div className={cn(styles.pizza, className)}>
			<div className={styles.pizza__img}>
				<ProductPizzaImage imageUrl={imageUrl} size={size} />
			</div>
			<div className={styles.pizza__content}>
				<Title text={name} className={styles.pizza__title} />
				<p className={styles.pizza__text}>{textDetails}</p>
				<div className={styles.pizza__toggle}>
					<ProductPizzaToggle
						items={availableSizes}
						value={String(size)}
						onClick={value => setSize(Number(value) as TPizzaSize)}
					/>
					<ProductPizzaToggle
						items={pizzaTypes}
						value={String(type)}
						onClick={value => setType(Number(value) as TPizzaType)}
					/>
				</div>
				<div className={cn('scrollbar', styles.pizza__ingredients)}>
					{ingredientList}
				</div>
				<Button
					loading={loading}
					variant='default'
					onClick={handleClickAdd}
					className={styles.pizza__btn}
					size='default'
				>
					Добавить в корзину {totalPrice} ₽
				</Button>
			</div>
		</div>
	)
}
