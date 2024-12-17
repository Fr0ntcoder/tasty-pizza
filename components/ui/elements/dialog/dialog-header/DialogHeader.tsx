import cn from 'clsx'
import { HTMLAttributes } from 'react'

import styles from './DialogHeader.module.scss'

export const DialogHeader = ({
	className,
	...props
}: HTMLAttributes<HTMLDivElement>) => (
	<div className={cn(styles.root, className)} {...props} />
)
