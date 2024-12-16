import cn from 'clsx'

import { Title } from '@/components/ui/common'

import styles from './CartInfo.module.scss'

interface ICartInfo {
	name: string
	details: string
	className?: string
}

export const CartInfo = ({ className, name, details }: ICartInfo) => {
	return (
		<div className={cn(styles.root, className)}>
			<Title text={name} size='sm' className={styles.title} />
			{details.length > 0 && <p className={styles.text}>{details}</p>}
		</div>
	)
}
