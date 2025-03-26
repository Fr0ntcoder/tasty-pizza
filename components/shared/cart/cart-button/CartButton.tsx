'use client'

import cn from 'clsx'
import { ArrowRight, ShoppingCart } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { useCart } from '@/hooks'

import { CartDrawer } from '../cart-drawer'

import styles from './CartButton.module.scss'

interface ICartButtonProps {
	className?: string
}

export function CartButton({ className }: ICartButtonProps) {
	const { totalAmount, loading, items } = useCart()
	return (
		<CartDrawer>
			<Button
				loading={loading}
				variant='default'
				className={cn(styles.button, className)}
			>
				<b>{totalAmount} ₽</b>
				<span className={styles.button__line}></span>
				<div className={styles.button__text}>
					<ShoppingCart
						width={16}
						className={styles.button__icon}
						strokeWidth={2}
					/>
					<b>{items.length}</b>
				</div>
				<ArrowRight width={16} className={styles.button__arrow} />
			</Button>
		</CartDrawer>
	)
}
