import type { Metadata } from 'next'
import { ReactNode } from 'react'

import { MainLayout } from '@/components/layouts/main-layout'

export const metadata: Metadata = {
	title: 'Tasty Pizza',
	description: ''
}

export default function RootLayout({
	children,
	modal
}: Readonly<{
	children: ReactNode
	modal: ReactNode
}>) {
	return (
		<MainLayout>
			{children}
			{modal}
		</MainLayout>
	)
}
