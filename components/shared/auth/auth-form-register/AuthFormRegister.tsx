import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { Button, Title } from '@/components/ui'

import { FormInput } from '@/components/shared/forms'

import { registerUser } from '@/app/actions'

import { TFormRegisterValues, formRegisterSchema } from '../shemas'

import styles from './AuthFormRegister.module.scss'

interface Props {
	onClose?: VoidFunction
	className?: string
}

export function AuthFormRegister({ className, onClose }: Props) {
	const form = useForm<TFormRegisterValues>({
		resolver: zodResolver(formRegisterSchema),
		defaultValues: {
			email: '',
			fullName: '',
			password: '',
			confirmPassword: ''
		}
	})

	const onSubmit = async (data: TFormRegisterValues) => {
		try {
			await registerUser({
				email: data.email,
				fullName: data.fullName,
				password: data.password
			})

			toast.success('Регистрация успешна!')

			onClose?.()
		} catch (error) {
			console.log(error, 'логин')
			toast.error('Не удалось войти в аккаунт')
		}
	}
	return (
		<FormProvider {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
				<Title text='Зарегистрироваться' className={styles.form__title} />
				<p className={styles.form__text}>Введите свою почту и пароль</p>
				<FormInput
					name='email'
					label='Email'
					required
					className={styles.form__input}
				/>
				<FormInput
					name='fullName'
					label='Полное имя'
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
				<FormInput
					type='password'
					name='confirmPassword'
					label='Повторите пароль'
					required
					className={styles.form__input}
				/>
				<Button type='submit' variant='default'>
					Зарегистрироваться
				</Button>
			</form>
		</FormProvider>
	)
}
