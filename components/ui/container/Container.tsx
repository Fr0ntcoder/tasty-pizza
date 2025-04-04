import cn from 'clsx'
import { PropsWithChildren } from 'react'

import styles from './Container.module.scss'

interface Props {
	className?: string
}

export function Container({ children, className }: PropsWithChildren<Props>) {
	return <div className={cn(styles.container, className)}>{children}</div>
}
