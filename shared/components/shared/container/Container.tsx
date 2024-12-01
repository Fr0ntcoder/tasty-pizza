import cn from 'clsx'
import { PropsWithChildren } from 'react'

import styles from './Container.module.scss'

type TContainer = {
	className?: string
}

export const Container = ({
	children,
	className
}: PropsWithChildren<TContainer>) => {
	return <div className={cn(styles.root, className)}>{children}</div>
}
