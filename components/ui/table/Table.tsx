import cn from 'clsx'
import { HTMLAttributes, forwardRef } from 'react'

import styles from './Table.module.scss'

const Table = forwardRef<HTMLTableElement, HTMLAttributes<HTMLTableElement>>(
	({ className, ...props }, ref) => (
		<div className={styles.root}>
			<table ref={ref} className={cn(styles.table, className)} {...props} />
		</div>
	)
)

export default Table
