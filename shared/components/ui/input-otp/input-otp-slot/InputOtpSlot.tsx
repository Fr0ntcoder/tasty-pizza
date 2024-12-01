'use client'

import cn from 'clsx'
import { OTPInputContext } from 'input-otp'
import {
	ComponentPropsWithoutRef,
	ElementRef,
	forwardRef,
	useContext
} from 'react'

import styles from './InputOtpSlot.module.scss'

export const InputOtpSlot = forwardRef<
	ElementRef<'div'>,
	ComponentPropsWithoutRef<'div'> & { index: number }
>(({ index, className, ...props }, ref) => {
	const inputOTPContext = useContext(OTPInputContext)
	const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

	return (
		<div
			ref={ref}
			className={cn(styles.root, isActive && styles.active, className)}
			{...props}
		>
			{char}
			{hasFakeCaret && (
				<div className={styles.caret}>
					<div className={styles.caret__text} />
				</div>
			)}
		</div>
	)
})
