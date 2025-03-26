'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import cn from 'clsx'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import styles from './SelectContent.module.scss'

export const SelectContent = forwardRef<
	ElementRef<typeof SelectPrimitive.Content>,
	ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
	<SelectPrimitive.Portal>
		<SelectPrimitive.Content
			ref={ref}
			className={cn(styles.content, className, {
				[styles[`content--active`]]: position === 'popper'
			})}
			position={position}
			{...props}
		>
			<SelectPrimitive.SelectScrollUpButton />
			<SelectPrimitive.Viewport
				className={cn(styles.content__viewport, {
					[styles[`content__viewport--active`]]: position === 'popper'
				})}
			>
				{children}
			</SelectPrimitive.Viewport>
			<SelectPrimitive.SelectScrollDownButton />
		</SelectPrimitive.Content>
	</SelectPrimitive.Portal>
))
