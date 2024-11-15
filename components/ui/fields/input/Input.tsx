import cn from 'clsx'
import { InputHTMLAttributes, forwardRef } from 'react'

import styles from './Input.module.scss'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
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

Input.displayName = 'Input'

export default Input
