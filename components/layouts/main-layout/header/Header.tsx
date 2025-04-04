'use client'

import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import { Container } from '@/components/ui'

import { CartButton } from '@/components/shared/cart'
import { AuthModal } from '@/components/shared/modal'
import { ProfileButton } from '@/components/shared/profile'

import { HeaderSearch } from './header-search'

import styles from './Header.module.scss'

interface Props {
	className?: string
}

export function Header({ className }: Props) {
	const [isOpenModal, setIsOpenModal] = useState(false)
	const searchParams = useSearchParams()
	useEffect(() => {
		if (searchParams.has('paid')) {
			setTimeout(() => {
				toast.success('Заказ успешно оплачен!')
			}, 500)
		}

		if (searchParams.has('verified')) {
			setTimeout(() => {
				toast.success('Почта успешно подтверждена!')
			}, 500)
		}
	}, [])
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
					<AuthModal open={isOpenModal} onClose={() => setIsOpenModal(false)} />
					<ProfileButton onSignIn={() => setIsOpenModal(true)} />
					<CartButton />
				</div>
			</Container>
		</header>
	)
}
