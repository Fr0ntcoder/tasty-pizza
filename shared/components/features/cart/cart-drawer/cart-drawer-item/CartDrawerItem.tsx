import cn from 'clsx'

import styles from './CartDrawerItem.module.scss'

type TCartDrawerItem = {
	className?: string
}

export const CartDrawerItem = ({ className }: TCartDrawerItem) => {
	return <div className={cn(styles.root, className)}>CartDrawerItem</div>
}
