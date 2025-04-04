import cn from 'clsx'
import { CircleUser, User } from 'lucide-react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

import { Button } from '@/components/ui'

import styles from './ProfileButton.module.scss'

interface Props {
	onSignIn?: () => void
	className?: string
}

export function ProfileButton({ className, onSignIn }: Props) {
	const { data: session } = useSession()
	return (
		<div className={cn(styles.btn, className)}>
			{!session ? (
				<Button variant='outline' onClick={onSignIn}>
					<User size={16} />
					Войти
				</Button>
			) : (
				<Link href='/profile' className={styles.btn__link}>
					<Button variant='default' type='button'>
						<CircleUser size={16} />
						Профиль
					</Button>
				</Link>
			)}
		</div>
	)
}
