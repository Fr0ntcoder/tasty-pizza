import cn from 'clsx'
import { HTMLAttributes, forwardRef } from 'react'

import styles from './TableRow.module.scss'

export const TableRow = forwardRef<
	HTMLTableRowElement,
	HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
	<tr ref={ref} className={cn(styles.root, className)} {...props} />
))
