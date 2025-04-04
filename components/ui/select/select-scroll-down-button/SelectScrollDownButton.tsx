'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import cn from 'clsx'
import { ChevronDown } from 'lucide-react'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import styles from './SelectScrollDownButton.module.scss'

export const SelectScrollDownButton = forwardRef<
	ElementRef<typeof SelectPrimitive.ScrollDownButton>,
	ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
	<SelectPrimitive.ScrollDownButton
		ref={ref}
		className={cn(styles.button, className)}
		{...props}
	>
		<ChevronDown className={styles.button__icon} />
	</SelectPrimitive.ScrollDownButton>
))
