import cn from 'clsx'

import { Title } from '@/components/ui/Title'

import styles from './CartItemInfo.module.scss'

interface ICartItemInfoProps {
	name: string
	details: string
	className?: string
}

export function CartItemInfo({ className, name, details }: ICartItemInfoProps) {
	return (
		<div className={cn(styles.root, className)}>
			<Title text={name} size='sm' className={styles.title} />
			{details.length > 0 && <p className={styles.text}>{details}</p>}
		</div>
	)
}
