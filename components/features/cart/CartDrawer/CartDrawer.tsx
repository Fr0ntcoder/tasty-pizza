'use client'

import cn from 'clsx'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { PropsWithChildren } from 'react'

import { Button } from '@/components/ui/Button'
import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@/components/ui/Sheet'

import { useCart } from '@/hooks'

import { TPizzaSize, TPizzaType } from '@/constants/pizza'

import { getCartItems } from '@/lib/cart'
import { formatWordCart } from '@/lib/other'

import { CartDrawerItem } from './CartDrawerItem'

import styles from './CartDrawer.module.scss'

interface ICartDrawerProps {
	className?: string
}

export function CartDrawer({
	children,
	className
}: PropsWithChildren<ICartDrawerProps>) {
	const { items, onUpdateQuantity, removeCartItem, totalAmount } = useCart()

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
			onClickRemove={() => removeCartItem(item.id)}
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
