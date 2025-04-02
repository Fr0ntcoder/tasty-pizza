import cn from 'clsx'
import { TextareaHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

import { Textarea } from '@/components/ui/form-elements'

import { FormClearButton } from '../form-clear-button'
import { FormTextError } from '../form-text-error'

import styles from './FormTextarea.module.scss'

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	name: string
	label?: string
	required?: boolean
	className?: string
}

export function FormTextarea({
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
		<div className={cn(styles.textarea, className)}>
			{label && (
				<p>
					{label}
					{required && <span className={styles.textarea__required}>*</span>}
				</p>
			)}
			<div className={styles.textarea__relative}>
				<Textarea
					{...props}
					{...register(name)}
					className={styles.textarea__block}
				/>
				{Boolean(value) && <FormClearButton onClick={onClear} />}
			</div>
			{errorText && <FormTextError text={errorText} />}
		</div>
	)
}
