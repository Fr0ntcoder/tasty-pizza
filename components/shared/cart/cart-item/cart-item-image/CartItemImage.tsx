import cn from 'clsx'

import styles from './CartItemImage.module.scss'

interface Props {
	src: string
	className?: string
}

export function CartItemImage({ src, className }: Props) {
	return <img className={cn(styles.img, className)} src={src} />
}
