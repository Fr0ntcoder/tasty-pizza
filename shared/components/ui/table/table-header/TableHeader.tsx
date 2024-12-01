import cn from 'clsx'
import { HTMLAttributes, forwardRef } from 'react'

import styles from './TableHeader.module.scss'

export const TableHeader = forwardRef<
	HTMLTableSectionElement,
	HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
	<thead ref={ref} className={cn(styles.root, className)} {...props} />
))
