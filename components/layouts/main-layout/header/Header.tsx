import cn from 'clsx'
import { User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { CartButton } from '@/components/ui/common/cart'
import { Button, Container } from '@/components/ui/elements'

import { HeaderSearch } from './header-search/HeaderSearch'

import styles from './Header.module.scss'

interface IHeader {
	className?: string
}

export const Header = ({ className }: IHeader) => {
	return (
		<header className={cn(styles.root, className)}>
			<Container className={styles.container}>
				<Link href='/'>
					<Image src='/logo.png' width={70} height={70} alt='logo' />
				</Link>
				<div className={styles.search}>
					<HeaderSearch />
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
