import cn from 'clsx'
import { X } from 'lucide-react'

import styles from './ClearButton.module.scss'

interface Props {
	className?: string
	onClick?: VoidFunction
}

export function ClearButton({ onClick, className }: Props) {
	return (
		<button className={cn(styles.button, className)} onClick={onClick}>
			<X />
		</button>
	)
}
