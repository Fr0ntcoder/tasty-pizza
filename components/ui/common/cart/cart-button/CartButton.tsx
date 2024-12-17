'use client'

import cn from 'clsx'
import { ArrowRight, ShoppingCart } from 'lucide-react'

import { Button } from '@/components/ui/elements'

import { CartDrawer } from '../cart-drawer/CartDrawer'

import styles from './CartButton.module.scss'

interface ICartButton {
	className?: string
}

export const CartButton = ({ className }: ICartButton) => {
	return (
		<CartDrawer>
			<Button variant='default' className={cn(styles.root, className)}>
				<b>520 ₽</b>
				<span className={styles.line}></span>
				<div className={styles.text}>
					<ShoppingCart width={16} className={styles.icon} strokeWidth={2} />
					<b>3</b>
				</div>
				<ArrowRight width={16} className={styles.arrow} />
			</Button>
		</CartDrawer>
	)
}
