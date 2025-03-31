'use client'

import { Checkbox } from '@/components/ui/form-elements'

import { IFilterCheckbox } from './types'

import styles from './FilterCheckbox.module.scss'

type Props = IFilterCheckbox

export function FilterCheckbox({
	text,
	value,
	endAdornment,
	onCheckedChange,
	checked,
	name
}: Props) {
	return (
		<div className={styles.wrap}>
			<Checkbox
				onCheckedChange={onCheckedChange}
				checked={checked}
				value={value}
				className={styles.checkbox}
				id={`checkbox-${String(name)}-${String(value)}`}
			/>
			<label
				htmlFor={`checkbox-${String(name)}-${String(value)}`}
				className={styles.checkbox__label}
			>
				{text}
			</label>
			{endAdornment}
		</div>
	)
}
