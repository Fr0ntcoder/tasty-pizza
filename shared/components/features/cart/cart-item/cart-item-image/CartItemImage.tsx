import cn from 'clsx'

import styles from './CartItemImage.module.scss'

type TCartItemImage = {
	src: string
	className?: string
}

export const CartItemImage = ({ src, className }: TCartItemImage) => {
	return <img className={cn(styles.root, className)} src={src} />
}
