'use client'

import { Category } from '@prisma/client'
import cn from 'clsx'
import { useState } from 'react'

import { Container } from '@/shared/components/ui'

import { CartButton } from '@/shared/components/features/cart'
import Categories from '@/shared/components/features/categories'
import SortPopup from '@/shared/components/features/sort-popup'

import styles from './TopBar.module.scss'

type TTopBar = {
	categories: Category[]
	className?: string
}

export const TopBar = ({ categories, className }: TTopBar) => {
	const [cartVisible, setCartVisible] = useState(false)

	return (
		<div className={cn(styles.root, className)}>
			<Container className={styles.container}>
				<Categories items={categories} />
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
