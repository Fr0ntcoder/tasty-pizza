'use client'

import { Slot } from '@radix-ui/react-slot'
import cn from 'clsx'
import { Loader2 } from 'lucide-react'
import { ButtonHTMLAttributes, forwardRef } from 'react'

import styles from './Button.module.scss'

type ButtonVariants =
	| 'default'
	| 'destructive'
	| 'outline'
	| 'secondary'
	| 'ghost'
	| 'link'

type ButtonSize = 'default' | 'sm' | 'lg' | 'icon'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	variant: ButtonVariants
	size?: ButtonSize
	asChild?: boolean
	loading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant = 'default',
			size = 'default',
			asChild = false,
			children,
			disabled,
			loading,
			...props
		},
		ref
	) => {
		const Comp = asChild ? Slot : 'button'
		return (
			<Comp
				disabled={disabled || loading}
				className={cn(
					styles.root,
					className,
					styles[`variant-${variant}`],
					styles[`size-${size}`]
				)}
				ref={ref}
				{...props}
			>
				{!loading ? children : <Loader2 className='w-5 h-5 animate-spin' />}
			</Comp>
		)
	}
)
