import cn from 'clsx'
import { Minus, Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { ICartCount } from '@/@types/cart'

import styles from './CartCountIcon.module.scss'

interface ICartCountIconProps {
	size?: ICartCount['size']
	disabled?: boolean
	type?: 'plus' | 'minus'
	onClick?: () => void
}

export function CartCountIcon({
	size = 'sm',
	disabled,
	type,
	onClick
}: ICartCountIconProps) {
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
