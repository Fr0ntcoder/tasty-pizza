export const formatWordCart = (n: number) => {
	const forms = ['товар', 'товара', 'товаров']
	const absCount = Math.abs(n)

	if (absCount % 100 >= 11 && absCount % 100 <= 19) {
		return forms[2]
	}

	switch (absCount % 10) {
		case 1:
			return `${n} ${forms[0]}`
		case 2:
		case 3:
		case 4:
			return `${n} ${forms[1]}`
		default:
			return `${n} ${forms[2]}`
	}
}
