'use client'

import cn from 'clsx'
import { User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'

import { CartButton } from '@/components/shared/cart'

import { HeaderSearch } from './header-search'

import styles from './Header.module.scss'

interface Props {
	className?: string
}

export function Header({ className }: Props) {
	return (
		<header className={cn(styles.header, className)}>
			<Container className={styles.header__container}>
				<Link href='/'>
					<Image src='/logo.png' width={70} height={70} alt='logo' />
				</Link>
				<div className={styles.header__search}>
					<HeaderSearch />
				</div>
				<div className={styles.header__block}>
					<Button variant='outline' className={styles.header__btn}>
						<User size={16} />
						Войти
					</Button>
					<CartButton />
				</div>
			</Container>
		</header>
	)
}
