interface Props {
	code: string
}

export function VerificationUser({ code }: Props) {
	return (
		<div>
			<p>Код подтверждения: {code}</p>
			<p>
				<a href={`http://localhost:3000/api/auth/verify?code=${code}`}>
					Подтвердить регистрацию
				</a>
			</p>
		</div>
	)
}
