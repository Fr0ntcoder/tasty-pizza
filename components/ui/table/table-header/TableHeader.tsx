import cn from 'clsx'
import { HTMLAttributes, forwardRef } from 'react'

import styles from './TableHeader.module.scss'

const TableHeader = forwardRef<
	HTMLTableSectionElement,
	HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
	<thead ref={ref} className={cn(styles.root, className)} {...props} />
))

export default TableHeader
