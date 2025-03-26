import cn from 'clsx'

import { Title } from '@/components/ui/title'

import styles from './CartItemInfo.module.scss'

interface ICartItemInfoProps {
	name: string
	details: string
	className?: string
}

export function CartItemInfo({ className, name, details }: ICartItemInfoProps) {
	return (
		<div className={cn(styles.info, className)}>
			<Title text={name} size='sm' className={styles.info__title} />
			{details.length > 0 && <p className={styles.info__text}>{details}</p>}
		</div>
	)
}
