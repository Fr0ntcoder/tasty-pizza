import cn from 'clsx'

import styles from './ProductPizzaImage.module.scss'

interface IProductPizzaImageProps {
	className?: string
	imageUrl: string
	size: 20 | 30 | 40
}

export function ProductPizzaImage({
	className,
	imageUrl,
	size
}: IProductPizzaImageProps) {
	return (
		<div className={cn(styles.wrap, className)}>
			<img
				src={imageUrl}
				className={cn(styles.img, {
					[styles['img--small']]: size === 20,
					[styles['img--medium']]: size === 30,
					[styles['img--big']]: size === 40
				})}
				alt='текст'
			/>
			<div className={cn(styles.circle, styles['circle--outer'])}></div>
			<div className={cn(styles.circle, styles['circle--inner'])}></div>
		</div>
	)
}
