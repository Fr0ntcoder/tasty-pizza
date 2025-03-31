'use client'

import { Product } from '@prisma/client'
import cn from 'clsx'
import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { useClickAway, useDebounce } from 'react-use'

import { Api } from '@/services/api-clients'

import styles from './HeaderSearch.module.scss'

interface Props {
	className?: string
}

export function HeaderSearch({ className }: Props) {
	const [searchQuery, setSearchQuery] = useState('')
	const [focused, setFocused] = useState(false)
	const [products, setProducts] = useState<Product[]>([])
	const ref = useRef(null)

	useClickAway(ref, () => {
		setFocused(false)
	})

	useDebounce(
		async () => {
			try {
				const response = await Api.products.search(searchQuery)
				setProducts(response)
			} catch (error) {
				console.log(error)
			}
		},
		250,
		[searchQuery]
	)

	const onClickItem = () => {
		setFocused(false)
		setSearchQuery('')
		setProducts([])
	}

	const items = products.map(item => (
		<Link
			href={`/product/${item.id}`}
			className={styles.search__item}
			key={item.id}
			onClick={onClickItem}
		>
			<Image src={item.imageUrl} width={40} height={40} alt={item.name} />
			{item.name}
		</Link>
	))

	return (
		<div className={styles.search}>
			{focused && <div className={styles.search__overlay}></div>}

			<div className={cn(styles.search__wrap, className)} ref={ref}>
				<Search size={20} className={styles.search__icon} />
				<input
					type='text'
					className={styles.search__input}
					placeholder='Найти пиццу...'
					onFocus={() => setFocused(true)}
					value={searchQuery}
					onChange={e => setSearchQuery(e.target.value)}
				/>
				{products.length > 0 && (
					<div
						className={cn(
							styles.search__popup,
							focused && styles['search__popup--active']
						)}
					>
						{items}
					</div>
				)}
			</div>
		</div>
	)
}
