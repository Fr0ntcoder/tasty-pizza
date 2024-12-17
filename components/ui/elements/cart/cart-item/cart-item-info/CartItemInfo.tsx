import cn from 'clsx'

import { Title } from '@/components/ui/common'

import styles from './CartItemInfo.module.scss'

interface ICartItemInfo {
	name: string
	details: string
	className?: string
}

export const CartItemInfo = ({ className, name, details }: ICartItemInfo) => {
	return (
		<div className={cn(styles.root, className)}>
			<Title text={name} size='sm' className={styles.title} />
			{details.length > 0 && <p className={styles.text}>{details}</p>}
		</div>
	)
}
