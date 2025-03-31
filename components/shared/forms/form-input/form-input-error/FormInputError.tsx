import cn from 'clsx'

import styles from './FormInputError.module.scss'

interface Props {
	text: string
	className?: string
}

export function FormInputError({ text, className }: Props) {
	return <div className={cn(styles.error, className)}>{text}</div>
}
