import cn from 'clsx'
import { createElement } from 'react'

import styles from './Title.module.scss'

type TSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

interface Props {
	size?: TSize
	className?: string
	text: string
}

export function Title({ text, size = 'sm', className }: Props) {
	const mapTagBySize = {
		xs: 'h5',
		sm: 'h4',
		md: 'h3',
		lg: 'h2',
		xl: 'h1',
		xxl: 'h1'
	} as const

	const mapClassNameBySize = {
		xs: styles[`size--xs`],
		sm: styles[`size--sm`],
		md: styles[`size--md`],
		lg: styles[`size--lg`],
		xl: styles[`size--xl`],
		xxl: styles[`size--xxl`]
	} as const

	return createElement(
		mapTagBySize[size],
		{ className: cn(mapClassNameBySize[size], className) },
		text
	)
}
