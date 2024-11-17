'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import cn from 'clsx'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import styles from './SelectSeparator.module.scss'

const SelectSeparator = forwardRef<
	ElementRef<typeof SelectPrimitive.Separator>,
	ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
	<SelectPrimitive.Separator
		ref={ref}
		className={cn(styles.root, className)}
		{...props}
	/>
))

export default SelectSeparator
