import cn from 'clsx'
import { ArrowUpDown } from 'lucide-react'

import styles from './SortPopup.module.scss'

type TSortPopup = {
	className?: string
}

export const SortPopup = ({ className }: TSortPopup) => {
	return (
		<div className={cn(styles.top, className)}>
			<ArrowUpDown width={20} height={20} />
			<b>Сортировка:</b>

			<b className={styles.top__text}>популярное</b>
		</div>
	)
}
