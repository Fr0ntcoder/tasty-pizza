import cn from 'clsx'
import { HTMLAttributes } from 'react'

import styles from './DialogHeader.module.scss'

export function DialogHeader({
	className,
	...props
}: HTMLAttributes<HTMLDivElement>) {
	return <div className={cn(styles.header, className)} {...props} />
}
