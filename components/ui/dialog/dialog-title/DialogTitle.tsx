import * as DialogPrimitive from '@radix-ui/react-dialog'
import cn from 'clsx'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import styles from './DialogTitle.module.scss'

const DialogTitle = forwardRef<
	ElementRef<typeof DialogPrimitive.Title>,
	ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Title
		ref={ref}
		className={cn(styles.root, className)}
		{...props}
	/>
))

export default DialogTitle
