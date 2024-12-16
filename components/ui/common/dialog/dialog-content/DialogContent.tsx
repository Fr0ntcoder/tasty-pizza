import * as DialogPrimitive from '@radix-ui/react-dialog'
import cn from 'clsx'
import { X } from 'lucide-react'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { DialogPortal } from '../dialog-other'
import { DialogOverlay } from '../dialog-overlay'

import styles from './DialogContent.module.scss'

export const DialogContent = forwardRef<
	ElementRef<typeof DialogPrimitive.Content>,
	ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<DialogPortal>
		<DialogOverlay />
		<DialogPrimitive.Content
			ref={ref}
			className={cn(styles.root, className)}
			{...props}
		>
			{children}
			<DialogPrimitive.Close className={styles.close}>
				<X className={styles.icon} />
				<span className={styles.text}>Close</span>
			</DialogPrimitive.Close>
		</DialogPrimitive.Content>
	</DialogPortal>
))
