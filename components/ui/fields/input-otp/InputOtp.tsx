'use client'

import cn from 'clsx'
import { OTPInput } from 'input-otp'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import styles from './InputOtp.module.scss'

const InputOtp = forwardRef<
	ElementRef<typeof OTPInput>,
	ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
	<OTPInput
		ref={ref}
		containerClassName={cn(styles.container, containerClassName)}
		className={cn(styles.root, className)}
		{...props}
	/>
))
InputOtp.displayName = 'InputOtp'

export default InputOtp
