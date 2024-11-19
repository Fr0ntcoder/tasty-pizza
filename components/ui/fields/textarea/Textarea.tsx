import cn from 'clsx'
import { TextareaHTMLAttributes, forwardRef } from 'react'

import styles from './Textarea.module.scss'

export interface TextareaProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className, ...props }, ref) => {
		return (
			<textarea className={cn(styles.root, className)} ref={ref} {...props} />
		)
	}
)
