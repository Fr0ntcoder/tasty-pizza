import cn from 'clsx'
import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

import { Input } from '@/components/ui/form-elements'

import { FormClearButton } from '../form-clear-button'
import { FormTextError } from '../form-text-error'

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
				<div className={styles.input__required}>
					{label} {required && <span>*</span>}
				</div>
			)}
			<div className={styles.input__relative}>
				<Input {...props} {...register(name)} className={styles.input__block} />
				{value && <FormClearButton onClick={onClear} />}
			</div>
			{errorText && <FormTextError text={errorText} />}
		</div>
	)
}
