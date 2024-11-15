import * as DialogPrimitive from '@radix-ui/react-dialog'
import cn from 'clsx'
import { X } from 'lucide-react'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { DialogPortal } from '@/components/ui/dialog/constants'
import DialogOverlay from '@/components/ui/dialog/dialog-overlay'

import styles from './DialogContent.module.scss'

const DialogContent = forwardRef<
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
			<DialogPrimitive.Close className={styles.close} asChild>
				<X className={styles.close__icon} />
				<span className={styles.close__text}>Close</span>
			</DialogPrimitive.Close>
		</DialogPrimitive.Content>
	</DialogPortal>
))

DialogContent.displayName = 'DialogContent'

export default DialogContent
