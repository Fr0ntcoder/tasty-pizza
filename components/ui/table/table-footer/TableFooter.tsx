import cn from 'clsx'
import { HTMLAttributes, forwardRef } from 'react'

import styles from './TableFooter.module.scss'

const TableFooter = forwardRef<
	HTMLTableSectionElement,
	HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
	<tfoot ref={ref} className={cn(styles.root, className)} {...props} />
))

export default TableFooter
