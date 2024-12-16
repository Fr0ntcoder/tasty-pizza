import cn from 'clsx'
import { Minus, Plus } from 'lucide-react'

import { Button } from '@/components/ui/common'

import { ICartCount } from '@/@types/cart'

import styles from './CartCountIcon.module.scss'

interface ICartCountIcon {
	size?: ICartCount['size']
	disabled?: boolean
	type?: 'plus' | 'minus'
	onClick?: () => void
}

export const CartCountIcon = ({
	size = 'sm',
	disabled,
	type,
	onClick
}: ICartCountIcon) => {
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
