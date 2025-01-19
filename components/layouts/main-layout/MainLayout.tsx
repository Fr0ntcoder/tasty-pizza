import { PropsWithChildren } from 'react'

import { Header } from './header/Header'

import styles from './MainLayout.module.scss'

interface IMainLayoutProps {
	className?: string
}

export function MainLayout({ children }: PropsWithChildren<IMainLayoutProps>) {
	return (
		<div className={styles.root}>
			<Header />
			<main className={styles.main}>{children}</main>
		</div>
	)
}
