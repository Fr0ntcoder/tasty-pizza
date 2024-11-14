import cn from 'clsx'

import styles from './DialogHeader.module.css'

const DialogHeader = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={cn(styles.root, className)} {...props} />
)

DialogHeader.displayName = 'DialogHeader'

export default DialogHeader
