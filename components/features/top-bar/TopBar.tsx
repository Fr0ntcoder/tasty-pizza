'use client'

import { Category } from '@prisma/client'
import cn from 'clsx'
import { useState } from 'react'

import { Container } from '@/components/ui/container'

import { CartButton } from '@/components/features/cart'

import { Navigation } from './navigation'
import { SortPopup } from './sort-popup'

import styles from './TopBar.module.scss'

interface ITopBarProps {
	categories: Category[]
	className?: string
}

export const TopBar = ({ categories, className }: ITopBarProps) => {
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
