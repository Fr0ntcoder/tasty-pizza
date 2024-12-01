'use-client'

import { Checkbox } from '@/shared/components/ui'

import styles from './FilterCheckbox.module.scss'

export type TFilterCheckbox = {
	text: string
	value: string
	endAdornment?: React.ReactNode
	onCheckedChange?: (checked: boolean) => void
	checked?: boolean
	name?: string
}

export const FilterCheckbox = ({
	text,
	value,
	endAdornment,
	onCheckedChange,
	checked,
	name
}: TFilterCheckbox) => {
	return (
		<div className={styles.root}>
			<Checkbox
				onCheckedChange={onCheckedChange}
				checked={checked}
				value={value}
				className={styles.checkbox}
				id={`checkbox-${String(name)}-${String(value)}`}
			/>
			<label
				htmlFor={`checkbox-${String(name)}-${String(value)}`}
				className={styles.label}
			>
				{text}
			</label>
			{endAdornment}
		</div>
	)
}
