import cn from 'clsx'
import { PropsWithChildren, ReactNode } from 'react'

import { Title } from '@/components/ui/title'

import styles from './WhiteBlock.module.scss'

interface IWhiteBlock {
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
}: PropsWithChildren<IWhiteBlock>) {
	return (
		<div className={cn(styles.block, className)}>
			{title && (
				<div className={styles.block__top}>
					<Title text={title} size='md' />
					{endAdornment}
				</div>
			)}
			<div className={styles.block__content}>{children}</div>
		</div>
	)
}
