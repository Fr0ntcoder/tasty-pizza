import cn from 'clsx'
import { HTMLAttributes, forwardRef } from 'react'

import styles from './TableCaption.module.scss'

export const TableCaption = forwardRef<
	HTMLTableCaptionElement,
	HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
	<caption ref={ref} className={cn(styles.root, className)} {...props} />
))
