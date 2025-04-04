'use client'

import * as SliderPrimitive from '@radix-ui/react-slider'
import cn from 'clsx'
import { Fragment, RefObject, forwardRef, useEffect, useState } from 'react'

import styles from './RangeSlider.module.scss'

interface Props {
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
		}: Props,
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
				className={cn(styles.slider, className)}
				{...props}
			>
				<SliderPrimitive.Track className={styles.slider__track}>
					<SliderPrimitive.Range className={styles.slider__range} />
				</SliderPrimitive.Track>
				{localValues.map((value, index) => (
					<Fragment key={index}>
						<div
							className={styles.slider__label}
							style={
								index === 0
									? {
											left: 0,
											top: `15px`
										}
									: { right: 0, top: `15px` }
							}
						>
							<span className={styles.slider__text}>
								{formatLabel ? formatLabel(value) : value}
							</span>
						</div>
						<SliderPrimitive.Thumb className={styles.slider__thumb} />
					</Fragment>
				))}
			</SliderPrimitive.Root>
		)
	}
)
