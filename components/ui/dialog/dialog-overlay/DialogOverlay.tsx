import * as DialogPrimitive from '@radix-ui/react-dialog'
import cn from 'clsx'
import { forwardRef } from 'react'

import styles from './DialogOverlay.module.scss'

const DialogOverlay = forwardRef<
	React.ElementRef<typeof DialogPrimitive.Overlay>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Overlay
		ref={ref}
		className={cn(styles.root, className)}
		{...props}
	/>
))

DialogOverlay.displayName = 'DialogOverlay'

export default DialogOverlay
