import cn from 'clsx'
import { PropsWithChildren } from 'react'

import styles from './Container.module.scss'

interface IContainerProps {
	className?: string
}

export function Container({
	children,
	className
}: PropsWithChildren<IContainerProps>) {
	return <div className={cn(styles.container, className)}>{children}</div>
}
