'use client'

import { Category } from '@prisma/client'
import cn from 'clsx'
import { useState } from 'react'

import { Container } from '@/components/ui/Container'

import { CartButton } from '@/components/features/Cart'

import { Navigation } from './Navigation'
import { SortPopup } from './SortPopup'

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
