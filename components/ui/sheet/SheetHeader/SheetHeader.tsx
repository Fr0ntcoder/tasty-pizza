import cn from 'clsx'
import { HTMLAttributes } from 'react'

import styles from './SheetHeader.module.scss'

export function SheetHeader({
	className,
	...props
}: HTMLAttributes<HTMLDivElement>) {
	return <div className={cn(styles.root, className)} {...props} />
}
