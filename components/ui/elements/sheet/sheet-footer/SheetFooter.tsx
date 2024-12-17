import cn from 'clsx'
import { HTMLAttributes } from 'react'

import styles from './SheetFooter.module.scss'

export const SheetFooter = ({
	className,
	...props
}: HTMLAttributes<HTMLDivElement>) => (
	<div className={cn(styles.root, className)} {...props} />
)
