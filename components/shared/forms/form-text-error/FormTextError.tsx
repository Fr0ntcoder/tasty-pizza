import cn from 'clsx'

import styles from './FormTextError.module.scss'

interface Props {
	text: string
	className?: string
}

export function FormTextError({ text, className }: Props) {
	return <div className={cn(styles.error, className)}>{text}</div>
}
