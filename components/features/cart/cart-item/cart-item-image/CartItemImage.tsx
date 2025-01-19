import cn from 'clsx'

import styles from './CartItemImage.module.scss'

interface ICartItemImageProps {
	src: string
	className?: string
}

export function CartItemImage({ src, className }: ICartItemImageProps) {
	return <img className={cn(styles.root, className)} src={src} />
}
