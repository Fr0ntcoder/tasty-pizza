'use client'

import { useRouter } from 'next/navigation'

import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'

import { ProductForm } from '@/components/shared/product'

import { type IProductWithRelation } from '@/@types/product'

import styles from './ProductModal.module.scss'

interface Props {
	product: IProductWithRelation | null
	className?: string
}

export function ProductModal({ product, className }: Props) {
	const router = useRouter()
	return (
		<Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
			<DialogContent className={styles.product__content}>
				<DialogTitle />
				<ProductForm product={product} onSubmit={() => router.back()} />
			</DialogContent>
		</Dialog>
	)
}
