import cn from 'clsx'
import { Minus, Plus } from 'lucide-react'

import { Button } from '@/shared/components/ui/button'
import { TCount } from '@/shared/components/ui/count'

import styles from './CountIcon.module.scss'

type TCountIcon = {
	size?: TCount['size']
	disabled?: boolean
	type?: 'plus' | 'minus'
	onClick?: () => void
}

export const CountIcon = ({
	size = 'sm',
	disabled,
	type,
	onClick
}: TCountIcon) => {
	return (
		<Button
			variant='outline'
			disabled={disabled}
			onClick={onClick}
			className={cn(
				styles.btn,
				size === 'sm' ? styles.btn__sm : styles.btn__md
			)}
		>
			{type === 'plus' ? (
				<Plus size={size === 'sm' ? 15 : 20} />
			) : (
				<Minus size={size === 'sm' ? 15 : 20} />
			)}
		</Button>
	)
}
