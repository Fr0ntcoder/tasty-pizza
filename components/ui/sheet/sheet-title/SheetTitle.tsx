import * as SheetPrimitive from '@radix-ui/react-dialog'
import cn from 'clsx'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import styles from './SheetTitle.module.scss'

const SheetTitle = forwardRef<
	ElementRef<typeof SheetPrimitive.Title>,
	ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
	<SheetPrimitive.Title
		ref={ref}
		className={cn(styles.root, className)}
		{...props}
	/>
))

export default SheetTitle
