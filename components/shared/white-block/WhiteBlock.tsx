import cn from 'clsx'
import { PropsWithChildren, ReactNode } from 'react'

import { Title } from '@/components/ui/title'

import styles from './WhiteBlock.module.scss'

interface Props {
	contentClassName?: string
	title?: string
	className?: string
	endAdornment?: ReactNode
}

export function WhiteBlock({
	className,
	title,
	contentClassName,
	endAdornment,
	children
}: PropsWithChildren<Props>) {
	return (
		<div className={cn(styles.block, className)}>
			{title && (
				<div className={styles.block__top}>
					<Title text={title} size='md' />
					{endAdornment}
				</div>
			)}
			{children}
		</div>
	)
}
