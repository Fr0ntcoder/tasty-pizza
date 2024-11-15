import cn from 'clsx'
import { HTMLAttributes } from 'react'

import styles from './DialogHeader.module.css'

const DialogHeader = ({
	className,
	...props
}: HTMLAttributes<HTMLDivElement>) => (
	<div className={cn(styles.root, className)} {...props} />
)

DialogHeader.displayName = 'DialogHeader'

export default DialogHeader
