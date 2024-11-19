'use client'

import * as SliderPrimitive from '@radix-ui/react-slider'
import cn from 'clsx'
import { Fragment, RefObject, forwardRef, useEffect, useState } from 'react'

import styles from './RangeSlider.module.scss'

type SliderProps = {
	className?: string
	min: number
	max: number
	step: number
	formatLabel?: (value: number) => string
	value?: number[] | readonly number[]
	onValueChange?: (values: number[]) => void
}

export const RangeSlider = forwardRef(
	(
		{
			className,
			min,
			max,
			step,
			formatLabel,
			value,
			onValueChange,
			...props
		}: SliderProps,
		ref
	) => {
		const initialValue = Array.isArray(value) ? value : [min, max]
		const [localValues, setLocalValues] = useState(initialValue)

		useEffect(() => {
			setLocalValues(Array.isArray(value) ? value : [min, max])
		}, [min, max, value])

		const handleValueChange = (newValues: number[]) => {
			setLocalValues(newValues)
			if (onValueChange) {
				onValueChange(newValues)
			}
		}

		return (
			<SliderPrimitive.Root
				ref={ref as RefObject<HTMLDivElement>}
				min={min}
				max={max}
				step={step}
				value={localValues}
				onValueChange={handleValueChange}
				className={cn(styles.root, className)}
				{...props}
			>
				<SliderPrimitive.Track className={styles.track}>
					<SliderPrimitive.Range className={styles.range} />
				</SliderPrimitive.Track>
				{localValues.map((value, index) => (
					<Fragment key={index}>
						<div
							className={styles.label}
							style={{
								left: `calc(${((value - min) / (max - min)) * 100}% + 0px)`,
								top: `10px`
							}}
						>
							<span className={styles.label__text}>
								{formatLabel ? formatLabel(value) : value}
							</span>
						</div>
						<SliderPrimitive.Thumb className={styles.thumb} />
					</Fragment>
				))}
			</SliderPrimitive.Root>
		)
	}
)
