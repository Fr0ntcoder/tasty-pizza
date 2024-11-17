import cn from 'clsx'
import { TdHTMLAttributes, forwardRef } from 'react'

import styles from './TableCell.module.scss'

const TableCell = forwardRef<
	HTMLTableCellElement,
	TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
	<td ref={ref} className={cn(styles.root, className)} {...props} />
))
export default TableCell
