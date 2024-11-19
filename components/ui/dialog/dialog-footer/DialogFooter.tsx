import cn from 'clsx'
import { HTMLAttributes } from 'react'

import styles from './DialogFooter.module.scss'

export const DialogFooter = ({
	className,
	...props
}: HTMLAttributes<HTMLDivElement>) => (
	<div className={cn(styles.root, className)} {...props} />
)
