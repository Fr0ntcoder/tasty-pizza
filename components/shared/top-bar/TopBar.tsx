'use client'

import { Category } from '@prisma/client'
import cn from 'clsx'
import { useState } from 'react'

import { CartButton } from '../cart'
import { Navigation } from '../navigation'
import { SortPopup } from '../sort-popup'

import styles from './TopBar.module.scss'

interface ITopBarProps {
	categories: Category[]
	className?: string
}

export const TopBar = ({ categories, className }: ITopBarProps) => {
	const [cartVisible, setCartVisible] = useState(false)

	return (
		<div className={cn(styles.bar, className)}>
			<Navigation items={categories} />
			<div className={styles.bar__block}>
				<SortPopup />
				<CartButton
					className={cn(
						styles.bar__btn,
						!cartVisible
							? styles['bar__btn--notvisible']
							: styles['bar--visible']
					)}
				/>
			</div>
		</div>
	)
}
