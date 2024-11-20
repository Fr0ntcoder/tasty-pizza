import * as PopoverPrimitive from '@radix-ui/react-popover'
import cn from 'clsx'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import styles from './Popover.module.scss'

export const PopoverContent = forwardRef<
	ElementRef<typeof PopoverPrimitive.Content>,
	ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
	<PopoverPrimitive.Portal>
		<PopoverPrimitive.Content
			ref={ref}
			align={align}
			sideOffset={sideOffset}
			className={cn(styles.root, className)}
			{...props}
		/>
	</PopoverPrimitive.Portal>
))
