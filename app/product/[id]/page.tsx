type Props = {
	id: string
}

export default async function ProductPage({ params }: { params: Props }) {
	const { id } = await params
	return (
		<div>
			<h1>Product {id}</h1>
		</div>
	)
}
