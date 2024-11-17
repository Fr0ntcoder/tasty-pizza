import * as DialogPrimitive from '@radix-ui/react-dialog'
import cn from 'clsx'
import { X } from 'lucide-react'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import styles from './DialogContent.module.scss'

const DialogContent = forwardRef<
	ElementRef<typeof DialogPrimitive.Content>,
	ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<DialogPrimitive.DialogPortal>
		<DialogPrimitive.DialogOverlay />
		<DialogPrimitive.Content
			ref={ref}
			className={cn(styles.root, className)}
			{...props}
		>
			{children}
			<DialogPrimitive.Close className={styles.close} asChild>
				<X className={styles.icon} />
				<span className={styles.text}>Close</span>
			</DialogPrimitive.Close>
		</DialogPrimitive.Content>
	</DialogPrimitive.DialogPortal>
))

export default DialogContent
