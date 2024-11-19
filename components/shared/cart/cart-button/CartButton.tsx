import cn from 'clsx'
import { ArrowRight, ShoppingCart } from 'lucide-react'

import Button from '@/components/ui/button'

import styles from './CartButton.module.scss'

export const CartButton = () => {
	return (
		<Button variant='default' className={cn(styles.root)}>
			<b>520 ₽</b>
			<span className={styles.line}></span>
			<div className={styles.text}>
				<ShoppingCart width={16} className={styles.icon} strokeWidth={2} />
				<b>3</b>
			</div>
			<ArrowRight width={16} className={styles.arrow} />
		</Button>
	)
}
