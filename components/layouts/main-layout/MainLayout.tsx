'use client'

import { PropsWithChildren } from 'react'

import { Container } from '@/components/ui/container'

import { Header } from './header'

import styles from './MainLayout.module.scss'

interface Props {
	className?: string
}

export function MainLayout({ children }: PropsWithChildren<Props>) {
	return (
		<div className={styles.layout}>
			<Header />
			<main className={styles.layout__main}>
				<Container className={styles.layout__container}>{children}</Container>
			</main>
		</div>
	)
}
