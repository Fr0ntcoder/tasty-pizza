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

interface ISearchInput {
	className?: string
}

export const HeaderSearch = ({ className }: ISearchInput) => {
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
			className={styles.item}
			key={item.id}
			onClick={onClickItem}
		>
			<Image src={item.imageUrl} width={40} height={40} alt={item.name} />
			{item.name}
		</Link>
	))

	return (
		<>
			{focused && <div className={styles.overlay}></div>}

			<div className={cn(styles.root, className)} ref={ref}>
				<Search size={20} className={styles.icon} />
				<input
					type='text'
					className={styles.input}
					placeholder='Найти пиццу...'
					onFocus={() => setFocused(true)}
					value={searchQuery}
					onChange={e => setSearchQuery(e.target.value)}
				/>
				{products.length > 0 && (
					<div className={cn(styles.popup, focused && styles.popup__active)}>
						{items}
					</div>
				)}
			</div>
		</>
	)
}
