import cn from 'clsx'
import { InputHTMLAttributes, forwardRef } from 'react'

import styles from './Input.module.scss'

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, IInput>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(styles.root, className)}
				ref={ref}
				{...props}
			/>
		)
	}
)
