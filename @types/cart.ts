export interface ICartItem {
	id: number
	imageUrl: string
	details: string
	name: string
	price: number
	quantity: number
	disabled?: boolean
}

export interface ICartCount {
	value?: number
	size?: 'sm' | 'lg'
	onClick?: (type: 'plus' | 'minus') => void
	className?: string
}
