import { z } from 'zod'

export const passwordSchema = z
	.string()
	.min(4, { message: 'Пароль должен быть не менее 6 символов' })

export const formLoginSchema = z.object({
	email: z.string().email({ message: 'Введите корректный email' }),
	password: passwordSchema
})

export const formRegisterSchema = formLoginSchema
	.merge(
		z.object({
			fullName: z.string().min(2, { message: 'Введите имя и фамилию' }),
			confirmPassword: passwordSchema
		})
	)
	.refine(data => data.password === data.confirmPassword, {
		message: 'Пароли должны совпадать',
		path: ['confilrmPassword']
	})

export type TFormLoginValues = z.infer<typeof formLoginSchema>
export type TFormRegisterValues = z.infer<typeof formRegisterSchema>
