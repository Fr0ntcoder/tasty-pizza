import cn from 'clsx'

import styles from './CartItemImage.module.scss'

interface ICartItemImage {
	src: string
	className?: string
}

export const CartItemImage = ({ src, className }: ICartItemImage) => {
	return <img className={cn(styles.root, className)} src={src} />
}
