import cn from 'clsx'

import { CountIcon } from '@/shared/components/ui/count'

import styles from './Count.module.scss'

export type TCount = {
	value?: number
	size?: 'sm' | 'lg'
	onClick?: (type: 'plus' | 'minus') => void
	className?: string
}

export const Count = ({
	className,
	onClick,
	value = 1,
	size = 'sm'
}: TCount) => {
	return (
		<div className={cn(styles.root, className)}>
			<CountIcon
				onClick={() => onClick?.('minus')}
				disabled={value === 1}
				size={size}
				type='minus'
			/>

			<b className={size === 'sm' ? styles.text__sm : styles.text__md}>
				{value}
			</b>

			<CountIcon onClick={() => onClick?.('plus')} size={size} type='plus' />
		</div>
	)
}
