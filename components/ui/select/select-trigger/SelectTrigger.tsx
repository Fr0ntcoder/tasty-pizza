'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import cn from 'clsx'
import { ChevronDown } from 'lucide-react'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import styles from './SelectTrigger.module.scss'

const SelectTrigger = forwardRef<
	ElementRef<typeof SelectPrimitive.Trigger>,
	ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<SelectPrimitive.Trigger
		ref={ref}
		className={cn(styles.root, className)}
		{...props}
	>
		{children}
		<SelectPrimitive.Icon asChild>
			<ChevronDown className={styles.icon} />
		</SelectPrimitive.Icon>
	</SelectPrimitive.Trigger>
))

export default SelectTrigger
