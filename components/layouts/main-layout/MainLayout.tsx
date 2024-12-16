import { PropsWithChildren } from 'react'

import { Header } from './header/Header'

import styles from './MainLayout.module.scss'

interface IMainLayout {
	className?: string
}

export const MainLayout = ({ children }: PropsWithChildren<IMainLayout>) => {
	return (
		<div className={styles.root}>
			<Header />
			<main className={styles.main}>{children}</main>
		</div>
	)
}
