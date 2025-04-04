'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react'

import { Button } from '@/components/ui'
import { Dialog, DialogContent } from '@/components/ui/dialog'

import { AuthFormLogin, AuthFormRegister } from '@/components/shared/auth'

import styles from './AuthModal.module.scss'

interface Props {
	open: boolean
	onClose: () => void
	className?: string
}

export function AuthModal({ className, open, onClose }: Props) {
	const [type, setType] = useState<'login' | 'register'>('login')
	const onSwitchType = () => {
		setType(prev => (prev === 'login' ? 'register' : 'login'))
	}
	const handleClose = () => {
		onClose()
		setType('login')
	}
	return (
		<Dialog open={open} onOpenChange={handleClose}>
			<DialogContent className={styles.modal}>
				{type === 'login' ? (
					<AuthFormLogin onClose={handleClose} />
				) : (
					<AuthFormRegister onClose={handleClose} />
				)}
				<div className={styles.modal__switch}>
					<Button variant='outline' onClick={onSwitchType}>
						{type === 'login' ? 'Регистрация' : 'Войти'}
					</Button>
				</div>
				<div className={styles.modal__bottom}>
					<Button
						variant='ghost'
						onClick={() =>
							signIn('github', {
								callbackUrl: '/',
								redirect: true
							})
						}
						type='button'
					>
						<img
							className={styles.btn}
							src='https://github.githubassets.com/favicons/favicon.svg'
						/>
						Github
					</Button>
					<Button
						type='button'
						variant='ghost'
						onClick={() => {
							signIn('google', {
								callbackUrl: '/',
								redirect: true
							})
						}}
					>
						<img
							className={styles.btn}
							src='https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg'
						/>
						Google
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	)
}
