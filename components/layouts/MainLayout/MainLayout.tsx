'use client'

import { PropsWithChildren } from 'react'

import { Header } from './Header'

import styles from './MainLayout.module.scss'

interface IMainLayoutProps {
	className?: string
}

export function MainLayout({ children }: PropsWithChildren<IMainLayoutProps>) {
	return (
		<div>
			<Header />
			<main className={styles.main}>{children}</main>
		</div>
	)
}
