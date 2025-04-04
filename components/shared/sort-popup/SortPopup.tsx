'use client'

import cn from 'clsx'
import { ArrowUpDown } from 'lucide-react'

import styles from './SortPopup.module.scss'

interface Props {
	className?: string
}

export function SortPopup({ className }: Props) {
	return (
		<div className={cn(styles.popup, className)}>
			<ArrowUpDown width={20} height={20} />
			<b>Сортировка:</b>

			<b className={styles.popup__text}>популярное</b>
		</div>
	)
}
