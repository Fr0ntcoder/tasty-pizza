import cn from 'clsx'
import { User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Button, Container } from '@/shared/components/ui'

import { CartButton } from '@/shared/components/features/cart'
import SearchInput from '@/shared/components/features/search-input'

import styles from './Header.module.scss'

type THeader = {
	className?: string
}

export const Header = ({ className }: THeader) => {
	return (
		<header className={cn(styles.root, className)}>
			<Container className={styles.container}>
				<Link href='/'>
					<Image src='/logo.png' width={70} height={70} alt='logo' />
				</Link>
				<div className={styles.search}>
					<SearchInput />
				</div>
				<div className={styles.block}>
					<Button variant='outline' className={styles.btn}>
						<User size={16} />
						Войти
					</Button>
					<CartButton />
				</div>
			</Container>
		</header>
	)
}
