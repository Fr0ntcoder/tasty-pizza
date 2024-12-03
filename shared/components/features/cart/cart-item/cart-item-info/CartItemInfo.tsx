import cn from 'clsx'

import { Title } from '@/shared/components/ui'

import styles from './CartItemInfo.module.scss'

type TCartItemInfo = {
	name: string
	details: string
	className?: string
}

export const CartItemInfo = ({ className, name, details }: TCartItemInfo) => {
	return (
		<div className={cn(styles.root, className)}>
			<Title text={name} size='sm' className={styles.title} />
			{details.length > 0 && <p className={styles.text}>{details}</p>}
		</div>
	)
}
