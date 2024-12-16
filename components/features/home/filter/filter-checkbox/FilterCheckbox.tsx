'use client'

import { Checkbox } from '@/components/ui/common/form-elements'

import { IFilterCheckbox } from './types'

import styles from './FilterCheckbox.module.scss'

export const FilterCheckbox = ({
	text,
	value,
	endAdornment,
	onCheckedChange,
	checked,
	name
}: IFilterCheckbox) => {
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
