import * as SheetPrimitive from '@radix-ui/react-dialog'
import cn from 'clsx'
import { X } from 'lucide-react'
import { ElementRef, ReactNode, forwardRef } from 'react'

import { SheetOverlay, SheetPortal } from '@/components/ui/sheet'

import styles from './SheetContent.module.scss'

type SheetContentSide = 'top' | 'bottom' | 'left' | 'right'

type SheetContentProps = {
	side: SheetContentSide
	className: string
	children: ReactNode
}

export const SheetContent = forwardRef<
	ElementRef<typeof SheetPrimitive.Content>,
	SheetContentProps
>(({ side = 'right', className, children, ...props }, ref) => (
	<SheetPortal>
		<SheetOverlay />
		<SheetPrimitive.Content
			ref={ref}
			className={cn(styles.root, styles[`root-${side}`], className)}
			{...props}
		>
			{children}
			<SheetPrimitive.Close className={styles.close}>
				<X className={styles.icon} />
				<span className={styles.text}>Close</span>
			</SheetPrimitive.Close>
		</SheetPrimitive.Content>
	</SheetPortal>
))
