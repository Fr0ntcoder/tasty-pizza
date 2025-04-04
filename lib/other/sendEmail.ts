import { ReactNode } from 'react'
import { Resend } from 'resend'

export const sendEmail = async (
	to: string,
	subject: string,
	template: ReactNode
) => {
	const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)

	const { data, error } = await resend.emails.send({
		from: 'onboarding@resend.dev',
		to,
		text: '',
		subject,
		react: template
	})

	if (error) {
		throw error
	}

	return data
}
