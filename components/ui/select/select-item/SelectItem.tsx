'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import cn from 'clsx'
import { Check } from 'lucide-react'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import styles from './SelectItem.module.scss'

const SelectItem = forwardRef<
	ElementRef<typeof SelectPrimitive.Item>,
	ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
	<SelectPrimitive.Item
		ref={ref}
		className={cn(styles.root, className)}
		{...props}
	>
		<span className={styles.text}>
			<SelectPrimitive.ItemIndicator>
				<Check className={styles.icon} />
			</SelectPrimitive.ItemIndicator>
		</span>

		<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
	</SelectPrimitive.Item>
))

export default SelectItem
