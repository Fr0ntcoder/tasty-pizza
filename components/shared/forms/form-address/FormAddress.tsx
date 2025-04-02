'use client'

import { AddressSuggestions } from 'react-dadata'
import 'react-dadata/dist/react-dadata.css'

import styles from './FormAddress.module.scss'

interface Props {
	onChange?: (value?: string) => void
}

export function FormAddress({ onChange }: Props) {
	return (
		<div className={styles.address}>
			<AddressSuggestions
				token={`${process.env.NEXT_PUBLIC_DADATA_API_KEY}`}
				onChange={data => onChange?.(data?.value)}
			/>
		</div>
	)
}
