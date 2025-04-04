'use client'

import { SessionProvider } from 'next-auth/react'
import NextTopLoader from 'nextjs-toploader'
import { PropsWithChildren } from 'react'
import { Toaster } from 'react-hot-toast'

interface Props {
	className?: string
}

export function Providers({ children }: PropsWithChildren) {
	return (
		<>
			<SessionProvider>{children}</SessionProvider>
			<Toaster />
			<NextTopLoader />
		</>
	)
}
