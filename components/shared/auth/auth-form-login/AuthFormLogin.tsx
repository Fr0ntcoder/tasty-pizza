import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { FormProvider, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { Button, Title } from '@/components/ui'

import { FormInput } from '@/components/shared/forms'

import { TFormLoginValues, formLoginSchema } from '../shemas'

import styles from './AuthFormLogin.module.scss'

interface Props {
	onClose?: VoidFunction
	className?: string
}

export function AuthFormLogin({ className, onClose }: Props) {
	const form = useForm<TFormLoginValues>({
		resolver: zodResolver(formLoginSchema),
		defaultValues: {
			email: '',
			password: ''
		}
	})

	const onSubmit = async (data: TFormLoginValues) => {
		try {
			console.log('resp')
			const resp = await signIn('credentials', {
				...data,
				redirect: false
			})

			if (!resp?.ok) {
				return toast.error('Неверный E-Mail или пароль', {
					icon: '❌'
				})
			}

			onClose?.()
		} catch (error) {
			console.log(error, 'логин')
			toast.error('Не удалось войти в аккаунт')
		}
	}
	return (
		<FormProvider {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
				<Title text='Вход в аккаунт' className={styles.form__title} />
				<p className={styles.form__text}>
					Введите свою почту,чтобы войти в свой аккаунт
				</p>
				<FormInput
					name='email'
					label='Email'
					required
					className={styles.form__input}
				/>
				<FormInput
					type='password'
					name='password'
					label='Пароль'
					required
					className={styles.form__input}
				/>
				<Button type='submit' variant='default'>
					{form.formState.isSubmitting ? 'Вход' : 'Войти'}
				</Button>
			</form>
		</FormProvider>
	)
}
