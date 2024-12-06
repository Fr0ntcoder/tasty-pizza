'use client'

import cn from 'clsx'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { PropsWithChildren, useEffect } from 'react'

import { Button } from '@/shared/components/ui/button'
import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@/shared/components/ui/sheet'

import { CartDrawerItem } from '@/shared/components/features/cart/cart-drawer/cart-drawer-item/CartDrawerItem'

import { TPizzaSize, TPizzaType } from '@/shared/constants/pizza'

import { useCartStore } from '@/shared/store'

import { formatWordCart, getCartItems } from '@/shared/lib'

import styles from './CartDrawer.module.scss'

type TCartDrawer = {
	className?: string
}

export const CartDrawer = ({
	children,
	className
}: PropsWithChildren<TCartDrawer>) => {
	const { items, totalAmount, fetchCartItems, updateItemQuantity } =
		useCartStore()

	useEffect(() => {
		fetchCartItems()
	}, [])

	const onUpdateQuantity = (
		id: number,
		quantity: number,
		type: 'plus' | 'minus'
	) => {
		const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1

		updateItemQuantity(id, newQuantity)
	}
	const list = items.map(item => (
		<CartDrawerItem
			key={item.id}
			id={String(item.id)}
			imageUrl={item.imageUrl}
			details={
				item.pizzaSize && item.pizzaType
					? getCartItems(
							item.ingredients,
							item.pizzaType as TPizzaType,
							item.pizzaSize as TPizzaSize
						)
					: ''
			}
			name={item.name}
			price={item.price}
			quantity={item.quantity}
			onUpdateQuantity={type => onUpdateQuantity(item.id, item.quantity, type)}
		/>
	))
	return (
		<Sheet>
			<SheetTrigger asChild>{children}</SheetTrigger>
			<SheetContent side='right' className={styles.content}>
				<SheetHeader>
					<SheetTitle className={styles.title}>
						В корзине <span>{formatWordCart(items.length)}</span>
					</SheetTitle>
				</SheetHeader>
				<div className={cn(styles.wrap, 'scrollbar')}>
					<div className={styles.list}>{list}</div>
				</div>
				<SheetFooter>
					<div className={styles.footer}>
						<div className={styles.footer__wrap}>
							<span className={styles.footer__text}>Итого</span>
							<span className={styles.footer__price}>{totalAmount} ₽</span>
						</div>
						<Link href='/cart' className={styles.footer__link}>
							<Button
								type='submit'
								className={styles.footer__btn}
								size='sm'
								variant='default'
							>
								Оформить заказ
								<ArrowRight size={18} />
							</Button>
						</Link>
					</div>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}
