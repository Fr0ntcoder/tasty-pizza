import cn from 'clsx'

import styles from './CartImage.module.scss'

interface ICartImage {
	src: string
	className?: string
}

export const CartImage = ({ src, className }: ICartImage) => {
	return <img className={cn(styles.root, className)} src={src} />
}
