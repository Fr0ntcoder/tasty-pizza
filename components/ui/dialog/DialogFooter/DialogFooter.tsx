import cn from 'clsx'
import { HTMLAttributes } from 'react'

import styles from './DialogFooter.module.scss'

export function DialogFooter({
	className,
	...props
}: HTMLAttributes<HTMLDivElement>) {
	return <div className={cn(styles.root, className)} {...props} />
}
