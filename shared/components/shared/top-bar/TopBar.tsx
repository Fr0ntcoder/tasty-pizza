'use client'

import { Category } from '@prisma/client'
import cn from 'clsx'
import { useState } from 'react'

import { CartButton } from '@/shared/components/shared/cart'
import Categories from '@/shared/components/shared/categories'
import Container from '@/shared/components/shared/container'
import SortPopup from '@/shared/components/shared/sort-popup'

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
