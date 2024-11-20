import cn from 'clsx'

import Title from '@/components/shared/title'

import styles from './FilterMain.module.scss'

type Props = {
	className?: string
}

export const FilterMain = ({ className }: Props) => {
	return (
		<div className={cn(styles.root, className)}>
			<Title text='Фильтрация' size='sm' className={styles.title} />
			<div className={styles.checkbox}></div>
		</div>
	)
}
