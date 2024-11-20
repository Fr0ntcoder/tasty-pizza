'use-client'

import Checkbox from '@/components/ui/checkbox'

import styles from './FilterCheckbox.module.scss'

export type FilterCheckboxProps = {
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
}: FilterCheckboxProps) => {
	return (
		<div className={styles.root}>
			<Checkbox
				onCheckedChange={onCheckedChange}
				checked={checked}
				value={value}
				className={styles.checkbox}
				id={`checkbox-${name}-${String(value)}`}
			/>
			<label
				htmlFor={`checkbox-${name}-${String(value)}`}
				className={styles.label}
			>
				{text}
			</label>
			{endAdornment}
		</div>
	)
}
