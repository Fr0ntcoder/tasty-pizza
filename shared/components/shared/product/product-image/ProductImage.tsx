import cn from 'clsx'

import styles from './ProductImage.module.scss'

type TProductImage = {
	className?: string
	imageUrl: string
	size: 20 | 30 | 40
}

export const ProductImage = ({ className, imageUrl, size }: TProductImage) => {
	return (
		<div className={cn(styles.root, className)}>
			<img
				src={imageUrl}
				className={cn(styles.image, {
					[styles.image__small]: size === 20,
					[styles.image__medium]: size === 30,
					[styles.image__big]: size === 40
				})}
				alt='текст'
			/>
			<div className={cn(styles.circle, styles.circle__outer)}></div>
			<div className={cn(styles.circle, styles.circle__inner)}></div>
		</div>
	)
}
