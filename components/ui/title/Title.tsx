import { clsx } from 'clsx'
import { createElement } from 'react'

import styles from './Title.module.scss'

type TTitleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

interface ITitle {
	size?: TTitleSize
	className?: string
	text: string
}

export function Title({ text, size = 'sm', className }: ITitle) {
	const mapTagBySize = {
		xs: 'h5',
		sm: 'h4',
		md: 'h3',
		lg: 'h2',
		xl: 'h1',
		xxl: 'h1'
	} as const

	const mapClassNameBySize = {
		xs: styles.xs,
		sm: styles.sm,
		md: styles.md,
		lg: styles.lg,
		xl: styles.xl,
		xxl: styles.xxl
	} as const

	return createElement(
		mapTagBySize[size],
		{ className: clsx(mapClassNameBySize[size], className) },
		text
	)
}
