import cn from 'clsx'
import { HTMLAttributes } from 'react'

import styles from './SheetHeader.module.scss'

const SheetHeader = ({
	className,
	...props
}: HTMLAttributes<HTMLDivElement>) => (
	<div className={cn(styles.root, className)} {...props} />
)

export default SheetHeader
