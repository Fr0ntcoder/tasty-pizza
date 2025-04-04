import cn from 'clsx'
import { X } from 'lucide-react'

import styles from './FormClearButton.module.scss'

interface Props {
	className?: string
	onClick?: VoidFunction
}

export function FormClearButton({ onClick, className }: Props) {
	return (
		<button className={cn(styles.button, className)} onClick={onClick}>
			<X />
		</button>
	)
}
