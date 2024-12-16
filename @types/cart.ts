export interface ICartItem {
	id: string
	imageUrl: string
	details: string
	name: string
	price: number
	quantity: number
}

export interface ICartCount {
	value?: number
	size?: 'sm' | 'lg'
	onClick?: (type: 'plus' | 'minus') => void
	className?: string
}
