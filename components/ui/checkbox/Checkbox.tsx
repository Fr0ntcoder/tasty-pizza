'use client'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import cn from 'clsx'
import { Check } from 'lucide-react'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import styles from './Checkbox.module.scss'

export const Checkbox = forwardRef<
	ElementRef<typeof CheckboxPrimitive.Root>,
	ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
	<CheckboxPrimitive.Root
		ref={ref}
		className={cn(styles.root, className)}
		{...props}
	>
		<CheckboxPrimitive.Indicator className={styles.indicator}>
			<Check className={styles.icon} strokeWidth={3} />
		</CheckboxPrimitive.Indicator>
	</CheckboxPrimitive.Root>
))
