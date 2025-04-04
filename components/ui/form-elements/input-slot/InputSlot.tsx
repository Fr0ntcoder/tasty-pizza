'use client'

import cn from 'clsx'
import { OTPInputContext } from 'input-otp'
import {
	ComponentPropsWithoutRef,
	ElementRef,
	forwardRef,
	useContext
} from 'react'

import styles from './InputSlot.module.scss'

export const InputSlot = forwardRef<
	ElementRef<'div'>,
	ComponentPropsWithoutRef<'div'> & { index: number }
>(({ index, className, ...props }, ref) => {
	const inputOTPContext = useContext(OTPInputContext)
	const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

	return (
		<div
			ref={ref}
			className={cn(styles.slot, isActive && styles[`slot--active`], className)}
			{...props}
		>
			{char}
			{hasFakeCaret && (
				<div className={styles.slot__caret}>
					<div className={styles.slot__text} />
				</div>
			)}
		</div>
	)
})
