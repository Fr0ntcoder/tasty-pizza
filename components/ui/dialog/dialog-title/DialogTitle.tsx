import * as DialogPrimitive from '@radix-ui/react-dialog'
import cn from 'clsx'
import { forwardRef } from 'react'

const DialogTitle = forwardRef<
	React.ElementRef<typeof DialogPrimitive.Title>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Title
		ref={ref}
		className={cn(
			'text-lg font-semibold leading-none tracking-tight',
			className
		)}
		{...props}
	/>
))
DialogTitle.displayName = 'DialogTitle'

export default DialogTitle
