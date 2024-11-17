import cn from 'clsx'
import { HTMLAttributes, forwardRef } from 'react'

import styles from './TableBody.module.scss'

const TableBody = forwardRef<
	HTMLTableSectionElement,
	HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
	<tbody ref={ref} className={cn(styles.root, className)} {...props} />
))

export default TableBody
