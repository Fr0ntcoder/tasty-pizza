import cn from 'clsx'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

import { Button, Title } from '@/components/ui'

import styles from './InfoBlock.module.scss'

interface Props {
	title: string
	text: string
	imageUrl?: string
	className?: string
}

export function InfoBlock({ className, text, title, imageUrl }: Props) {
	return (
		<div className={cn(styles.block, className)}>
			<div className={styles.block__content}>
				<Title text={title} className={styles.block__title} />
				<p className={styles.block__text}>{text}</p>
				<div className={styles.block__btns}>
					<Link href='/' className={styles.block__link}>
						<Button variant='default'>
							<ArrowLeft /> На главную
						</Button>
					</Link>
					<Button variant='outline'>Обновить</Button>
				</div>
			</div>

			{imageUrl && (
				<img src={imageUrl} className={styles.block__img} alt={title} />
			)}
		</div>
	)
}
