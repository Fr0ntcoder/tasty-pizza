import cn from 'clsx'

import styles from './DialogFooter.module.scss'

const DialogFooter = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={cn(styles.root, className)} {...props} />
)
DialogFooter.displayName = 'DialogFooter'

export default DialogFooter
