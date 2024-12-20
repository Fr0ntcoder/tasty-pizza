'use client'

import { Category } from '@prisma/client'
import cn from 'clsx'
import { useState } from 'react'

import { Container } from '@/components/ui'

import { CartButton } from '@/components/features/cart'

import { Navigation } from './navigation/Navigation'
import { SortPopup } from './sort-popup/SortPopup'

import styles from './TopBar.module.scss'

interface ITopBar {
	categories: Category[]
	className?: string
}

export const TopBar = ({ categories, className }: ITopBar) => {
	const [cartVisible, setCartVisible] = useState(false)

	return (
		<div className={cn(styles.root, className)}>
			<Container className={styles.container}>
				<Navigation items={categories} />
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
