'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { User } from '@prisma/client'
import { signOut } from 'next-auth/react'
import { FormProvider, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { Button, Title } from '@/components/ui'

import {
	TFormRegisterValues,
	formRegisterSchema
} from '@/components/shared/auth/shemas'
import { FormInput } from '@/components/shared/forms'

import { updateUserInfo } from '@/app/actions'

import styles from './ProfileForm.module.scss'

interface Props {
	data: User
	className?: string
}

export function ProfileForm({ className, data }: Props) {
	const form = useForm({
		resolver: zodResolver(formRegisterSchema),
		defaultValues: {
			fullName: data.fullName,
			email: data.email,
			password: '',
			confirmPassword: ''
		}
	})

	const onSubmit = async (data: TFormRegisterValues) => {
		try {
			await updateUserInfo({
				email: data.email,
				fullName: data.fullName,
				password: data.password
			})

			toast.success('Данные обновлены')
		} catch (error) {
			toast.error('Данные обновлены')
			console.log(error)
		}
	}

	const onClickSignOut = () => {
		signOut({
			callbackUrl: '/'
		})
	}
	return (
		<div className={styles.form}>
			<Title text='Личные данные' className={styles.form__title} />
			<FormProvider {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className={styles.form__block}
				>
					<FormInput name='email' label='Email' required />
					<FormInput name='fullName' label='Полное имя' required />
					<FormInput
						type='password'
						name='password'
						label='Новый пароль'
						required
					/>
					<FormInput
						type='password'
						name='confirmPassword'
						label='Повторите пароль'
						required
					/>
					<Button type='submit' variant='default'>
						Сохранить
					</Button>
					<Button type='button' variant='outline' onClick={onClickSignOut}>
						Выйти
					</Button>
				</form>
			</FormProvider>
		</div>
	)
}
