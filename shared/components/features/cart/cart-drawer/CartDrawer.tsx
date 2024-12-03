'use client'

import cn from 'clsx'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { PropsWithChildren } from 'react'

import { Button } from '@/shared/components/ui'
import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@/shared/components/ui/sheet'

import { CartDrawerItem } from '@/shared/components/features/cart/cart-drawer/cart-drawer-item/CartDrawerItem'

import { getCartItems } from '@/shared/lib'

import styles from './CartDrawer.module.scss'

type TCartDrawer = {
	className?: string
}

export const CartDrawer = ({
	children,
	className
}: PropsWithChildren<TCartDrawer>) => {
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
					<div className={styles.list}>
						<CartDrawerItem
							id='1'
							imageUrl='/assets/pizza/chorizo-fresh.webp'
							details={getCartItems(2, 30, [
								{ name: 'цыпленок' },
								{ name: 'моцарела' }
							])}
							name='Чоризо фреш'
							price={250}
							quantity={1}
						/>
						<CartDrawerItem
							id='1'
							imageUrl='/assets/pizza/chorizo-fresh.webp'
							details={getCartItems(2, 30, [
								{ name: 'цыпленок' },
								{ name: 'моцарела' }
							])}
							name='Чоризо фреш'
							price={250}
							quantity={1}
						/>
					</div>
				</div>
				<SheetFooter>
					<div className={styles.footer}>
						<div className={styles.footer__wrap}>
							<span className={styles.footer__text}>Итого</span>
							<span className={styles.footer__price}>500 ₽</span>
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
