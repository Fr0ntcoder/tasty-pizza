import cn from 'clsx'
import { PropsWithChildren } from 'react'

import styles from './Container.module.scss'

type Props = {
	className?: string
}

export const Container = ({
	children,
	className
}: PropsWithChildren<Props>) => {
	return <div className={cn(styles.root, className)}>{children}</div>
}
