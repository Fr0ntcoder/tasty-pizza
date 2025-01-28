'use client'

import { Checkbox } from '@/components/ui/FormElements'

import { IFilterCheckbox } from './types'

import styles from './FilterCheckbox.module.scss'

type TFilterCheckboxProps = IFilterCheckbox

export function FilterCheckbox({
	text,
	value,
	endAdornment,
	onCheckedChange,
	checked,
	name
}: TFilterCheckboxProps) {
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
