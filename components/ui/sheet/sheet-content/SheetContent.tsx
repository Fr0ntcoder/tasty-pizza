import * as SheetPrimitive from '@radix-ui/react-dialog'
import cn from 'clsx'
import { X } from 'lucide-react'
import { ElementRef, ReactNode, forwardRef } from 'react'

import { SheetOverlay, SheetPortal } from '@/components/ui/sheet'

import styles from './SheetContent.module.scss'

type TSheetSide = 'top' | 'bottom' | 'left' | 'right'

interface Props {
	side: TSheetSide
	className?: string
	children?: ReactNode
}

export const SheetContent = forwardRef<
	ElementRef<typeof SheetPrimitive.Content>,
	Props
>(({ side = 'right', className, children, ...props }, ref) => (
	<SheetPortal>
		<SheetOverlay />
		<SheetPrimitive.Content
			ref={ref}
			className={cn(styles.content, styles[`content--${side}`], className)}
			{...props}
		>
			{children}
			<SheetPrimitive.Close className={styles.content__close}>
				<X className={styles.content__icon} />
				<span className={styles.content__text}>Close</span>
			</SheetPrimitive.Close>
		</SheetPrimitive.Content>
	</SheetPortal>
))
