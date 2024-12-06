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

import { CartDrawerItem } from '@/shared/components/features/cart'

import { TPizzaSize, TPizzaType } from '@/shared/constants/pizza'

import { useCartStore } from '@/shared/store'

import { getCartItems } from '@/shared/lib'

import styles from './CartDrawer.module.scss'

type TCartDrawer = {
	className?: string
}

export const CartDrawer = ({
	children,
	className
}: PropsWithChildren<TCartDrawer>) => {
	const { items, totalAmount, fetchCartItems } = useCartStore()

	useEffect(() => {
		fetchCartItems()
	}, [])

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
		/>
	))
	return (
		<Sheet>
			<SheetTrigger asChild>{children}</SheetTrigger>
			<SheetContent side='right' className={styles.content}>
				<SheetHeader>
					<SheetTitle className={styles.title}>
						В корзине <span>3 товара</span>
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
