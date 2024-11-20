import * as SheetPrimitive from '@radix-ui/react-dialog'
import cn from 'clsx'
import * as React from 'react'

import styles from './SheetOverlay.module.scss'

export const SheetOverlay = React.forwardRef<
	React.ElementRef<typeof SheetPrimitive.Overlay>,
	React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
	<SheetPrimitive.Overlay
		className={cn(styles.root, className)}
		{...props}
		ref={ref}
	/>
))
