'use client'

import { useRouter } from 'next/navigation'

import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'

import { type IProductWithRelation } from '@/@types/product'

import { ProductForm } from '../product-form'

import styles from './ProductModal.module.scss'

interface IProductModalProps {
	product: IProductWithRelation | null
	className?: string
}

export function ProductModal({ product, className }: IProductModalProps) {
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
