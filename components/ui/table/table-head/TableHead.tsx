import cn from 'clsx'
import { ThHTMLAttributes, forwardRef } from 'react'

import styles from './TableHead.module.scss'

const TableHead = forwardRef<
	HTMLTableCellElement,
	ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
	<th ref={ref} className={cn(styles.root, className)} {...props} />
))

export default TableHead
