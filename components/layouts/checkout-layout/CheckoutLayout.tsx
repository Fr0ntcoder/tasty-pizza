import { PropsWithChildren } from 'react'

import { Container } from '@/components/ui/container'

import { Header } from './header'

import styles from './CheckoutLayout.module.scss'

interface ICheckoutLayoutProps {
	className?: string
}

export function CheckoutLayout({
	children
}: PropsWithChildren<ICheckoutLayoutProps>) {
	return (
		<div className={styles.layout}>
			<Header />
			<main className={styles.layout__main}>
				<Container>{children}</Container>
			</main>
		</div>
	)
}
