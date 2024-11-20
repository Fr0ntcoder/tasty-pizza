import Checkbox from '@/components/ui/checkbox'

import styles from './FilterCheckbox.module.scss'

type Props = {
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
}: Props) => {
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
