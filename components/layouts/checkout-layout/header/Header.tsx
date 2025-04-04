'use client'

import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { Container } from '@/components/ui'

import { ProfileButton } from '@/components/shared/profile'

import styles from './Header.module.scss'

interface Props {
	className?: string
}

export function Header({ className }: Props) {
	const [isOpenModal, setIsOpenModal] = useState(false)
	return (
		<header className={cn(styles.header, className)}>
			<Container className={styles.header__container}>
				<Link href='/' className={styles.header__logo}>
					<Image src='/logo.png' width={70} height={70} alt='logo' />
				</Link>
				<div className={styles.header__block}>
					<ProfileButton onSignIn={() => setIsOpenModal(true)} />
				</div>
			</Container>
		</header>
	)
}
