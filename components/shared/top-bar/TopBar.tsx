'use client'

import cn from 'clsx'
import { useState } from 'react'

import { CartButton } from '@/components/shared/cart'
import Categories from '@/components/shared/categories'
import Container from '@/components/shared/container'
import SortPopup from '@/components/shared/sort-popup'

import styles from './TopBar.module.scss'

type Props = {
	className?: string
}

export const TopBar = ({ className }: Props) => {
	const [cartVisible, setCartVisible] = useState(false)

	return (
		<div className={cn(styles.root, className)}>
			<Container className={styles.container}>
				<Categories />
				<div className={styles.block}>
					<SortPopup />
					<CartButton
						className={cn(
							styles.btn,
							!cartVisible ? styles.notvisible : styles.visible
						)}
					/>
				</div>
			</Container>
		</div>
	)
}
