import cn from 'clsx'
import { HTMLAttributes } from 'react'

import styles from './DialogHeader.module.scss'

const DialogHeader = ({
	className,
	...props
}: HTMLAttributes<HTMLDivElement>) => (
	<div className={cn(styles.root, className)} {...props} />
)

export default DialogHeader
