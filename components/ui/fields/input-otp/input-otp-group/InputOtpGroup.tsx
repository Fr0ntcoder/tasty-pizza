import cn from 'clsx'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import styles from './InputOtpGroup.module.scss'

export const InputOtpGroup = forwardRef<
	ElementRef<'div'>,
	ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
	<div ref={ref} className={cn(styles.root, className)} {...props} />
))
