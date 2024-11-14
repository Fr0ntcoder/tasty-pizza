import * as DialogPrimitive from '@radix-ui/react-dialog'
import cn from 'clsx'
import { forwardRef } from 'react'

import styles from './DialogDescription.module.scss'

const DialogDescription = forwardRef<
	React.ElementRef<typeof DialogPrimitive.Description>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Description
		ref={ref}
		className={cn(styles.root, className)}
		{...props}
	/>
))

DialogDescription.displayName = 'DialogDescription'

export default DialogDescription
