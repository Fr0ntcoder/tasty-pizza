import cn from 'clsx'

import { Title } from '@/components/ui'

import styles from './CartItemInfo.module.scss'

interface Props {
	name: string
	details: string
	className?: string
}

export function CartItemInfo({ className, name, details }: Props) {
	return (
		<div className={cn(styles.info, className)}>
			<Title text={name} size='sm' className={styles.info__title} />
			{details.length > 0 && <p className={styles.info__text}>{details}</p>}
		</div>
	)
}
