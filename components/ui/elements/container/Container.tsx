import cn from 'clsx'
import { PropsWithChildren } from 'react'

import styles from './Container.module.scss'

interface IContainer {
	className?: string
}

export const Container = ({
	children,
	className
}: PropsWithChildren<IContainer>) => {
	return <div className={cn(styles.root, className)}>{children}</div>
}
