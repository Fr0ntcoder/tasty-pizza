'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import cn from 'clsx'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import styles from './SelectContent.module.scss'

const SelectLabel = forwardRef<
	ElementRef<typeof SelectPrimitive.Label>,
	ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
	<SelectPrimitive.Label
		ref={ref}
		className={cn(styles.root, className)}
		{...props}
	/>
))

export default SelectLabel
