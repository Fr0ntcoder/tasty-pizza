import cn from 'clsx'
import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

import { Input } from '@/components/ui/form-elements'

import { ClearButton } from './clear-button'
import { FormInputError } from './form-input-error'

import styles from './FormInput.module.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	name: string
	label?: string
	required?: boolean
	className?: string
}

export function FormInput({
	name,
	label,
	required,
	className,
	...props
}: Props) {
	const {
		register,
		formState: { errors },
		watch,
		setValue
	} = useFormContext()
	const value = watch(name)
	const errorText = errors[name]?.message as string

	const onClear = () => {
		setValue(name, '', { shouldValidate: true })
	}
	return (
		<div className={cn(styles.input, className)}>
			{label && (
				<p>
					{label}{' '}
					{required && <span className={styles.input__required}>*</span>}
				</p>
			)}
			<div className={styles.input__relative}>
				<Input {...props} {...register(name)} className={styles.input__block} />
				{value && <ClearButton onClick={onClear} />}
			</div>
			{errorText && <FormInputError text={errorText} />}
		</div>
	)
}
