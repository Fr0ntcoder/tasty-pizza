import cn from 'clsx'

import { InfoBlock } from '@/components/shared/info-block'

import styles from './Unauthorized.module.scss'

interface Props {
	className?: string
}

export function Unauthorized({ className }: Props) {
	return (
		<div className={cn(styles.unauthorized, className)}>
			<InfoBlock
				title='Доступ запрещен'
				text='Данную страницу могут просматривать только авторизованные пользователи'
				imageUrl='/assets/other/lock.png'
			/>
		</div>
	)
}
