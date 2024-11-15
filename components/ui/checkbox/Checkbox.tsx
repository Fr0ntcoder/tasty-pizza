'use client'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import cn from 'clsx'
import { Check } from 'lucide-react'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import styles from './Checkbox.module.scss'

const CheckboxRoot = CheckboxPrimitive.Root
const CheckboxInidicator = CheckboxPrimitive.Indicator

const Checkbox = forwardRef<
	ElementRef<typeof CheckboxRoot>,
	ComponentPropsWithoutRef<typeof CheckboxRoot>
>(({ className, ...props }, ref) => (
	<CheckboxRoot ref={ref} className={cn(styles.root, className)} {...props}>
		<CheckboxInidicator className={styles.indicator}>
			<Check className={styles.icon} strokeWidth={3} />
		</CheckboxInidicator>
	</CheckboxRoot>
))

Checkbox.displayName = CheckboxRoot.displayName

export default Checkbox
