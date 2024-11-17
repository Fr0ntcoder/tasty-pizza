'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import cn from 'clsx'
import { ChevronUp } from 'lucide-react'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import styles from './SelectScrollUpButton.module.scss'

const SelectScrollUpButton = forwardRef<
	ElementRef<typeof SelectPrimitive.ScrollUpButton>,
	ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
	<SelectPrimitive.ScrollUpButton
		ref={ref}
		className={cn(styles.root, className)}
		{...props}
	>
		<ChevronUp className={styles.icon} />
	</SelectPrimitive.ScrollUpButton>
))

export default SelectScrollUpButton
