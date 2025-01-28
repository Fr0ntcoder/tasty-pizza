import cn from 'clsx'
import { HTMLAttributes } from 'react'

import styles from './SheetFooter.module.scss'

export function SheetFooter({
	className,
	...props
}: HTMLAttributes<HTMLDivElement>) {
	return <div className={cn(styles.root, className)} {...props} />
}
