import * as SheetPrimitive from '@radix-ui/react-dialog'
import cn from 'clsx'
import { X } from 'lucide-react'
import { ElementRef, ReactNode, forwardRef } from 'react'

import { SheetOverlay, SheetPortal } from '@/components/ui/elements/sheet'

import styles from './SheetContent.module.scss'

type TSheetSide = 'top' | 'bottom' | 'left' | 'right'

interface ISheetContent {
	side: TSheetSide
	className?: string
	children?: ReactNode
}

export const SheetContent = forwardRef<
	ElementRef<typeof SheetPrimitive.Content>,
	ISheetContent
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
