'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import cn from 'clsx'
import { Check } from 'lucide-react'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import styles from './SelectItem.module.scss'

export const SelectItem = forwardRef<
	ElementRef<typeof SelectPrimitive.Item>,
	ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
	<SelectPrimitive.Item
		ref={ref}
		className={cn(styles.item, className)}
		{...props}
	>
		<span className={styles.item__text}>
			<SelectPrimitive.ItemIndicator>
				<Check className={styles.item__icon} />
			</SelectPrimitive.ItemIndicator>
		</span>

		<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
	</SelectPrimitive.Item>
))
