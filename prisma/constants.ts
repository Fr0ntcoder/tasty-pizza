export const categories = [
	{
		name: 'Пиццы'
	},
	{
		name: 'Завтрак'
	},
	{
		name: 'Закуски'
	},
	{
		name: 'Коктейли'
	},
	{
		name: 'Напитки'
	}
]

export const ingredients = [
	{
		name: 'Сырный бортик',
		price: 179,
		imageUrl: '/assets/ingredients/syrnyj-bortik.png'
	},
	{
		name: 'Сливочная моцарелла',
		price: 79,
		imageUrl: '/assets/ingredients/slivochnaya-mocarella.png'
	},
	{
		name: 'Сыры чеддер и пармезан',
		price: 79,
		imageUrl: '/assets/ingredients/syry-chedder-i-parmezan.png'
	},
	{
		name: 'Острый перец халапеньо',
		price: 59,
		imageUrl: '/assets/ingredients/ostryj-perec-halapeno.png'
	},
	{
		name: 'Нежный цыпленок',
		price: 79,
		imageUrl: '/assets/ingredients/nezhnyj-cyplenok.png'
	},
	{
		name: 'Шампиньоны',
		price: 59,
		imageUrl: '/assets/ingredients/shampinony.png'
	},
	{
		name: 'Ветчина',
		price: 79,
		imageUrl: '/assets/ingredients/vetchina.png'
	},
	{
		name: 'Пикантная пепперони',
		price: 79,
		imageUrl: '/assets/ingredients/pikantnaya-pepperoni.png'
	},
	{
		name: 'Острая чоризо',
		price: 79,
		imageUrl: '/assets/ingredients/ostraya-chorizo.png'
	},
	{
		name: 'Маринованные огурчики',
		price: 59,
		imageUrl: '/assets/ingredients/marinovannye-ogurchiki.png'
	},
	{
		name: 'Свежие томаты',
		price: 59,
		imageUrl: '/assets/ingredients/svezhie-tomaty.png'
	},
	{
		name: 'Красный лук',
		price: 59,
		imageUrl: '/assets/ingredients/krasnyj-luk.png'
	},
	{
		name: 'Сочные ананасы',
		price: 59,
		imageUrl: '/assets/ingredients/sochnye-ananasy.png'
	},
	{
		name: 'Итальянские травы',
		price: 39,
		imageUrl: '/assets/ingredients/italyanskie-travy.png'
	},
	{
		name: 'Сладкий перец',
		price: 59,
		imageUrl: '/assets/ingredients/sladkij-perec.png'
	},
	{
		name: 'Кубики брынзы',
		price: 79,
		imageUrl: '/assets/ingredients/kubiki-brynzy.png'
	},
	{
		name: 'Митболы',
		price: 79,
		imageUrl: '/assets/ingredients/mitboly.png'
	}
].map((obj, index) => ({ id: index + 1, ...obj }))

export const products = [
	{
		name: 'Омлет с ветчиной и грибами',
		imageUrl: '/assets/products/omlet-s-vetchinoj-i-gribami.webp',
		categoryId: 2
	},
	{
		name: 'Омлет с пепперони',
		imageUrl: '/assets/products/omlet-s-pepperoni.webp',
		categoryId: 2
	},
	{
		name: 'Кофе Латте',
		imageUrl: '/assets/products/kofe-latte.webp',
		categoryId: 2
	},
	{
		name: 'Дэнвич ветчина и сыр',
		imageUrl: '/assets/products/denvich-vetchina-i-syr.webp',
		categoryId: 3
	},
	{
		name: 'Куриные наггетсы',
		imageUrl: '/assets/products/kurinye-naggetsy.webp',
		categoryId: 3
	},
	{
		name: 'Картофель из печи с соусом 🌱',
		imageUrl: '/assets/products/kartofel-iz-pechi-s-sousom.webp',
		categoryId: 3
	},
	{
		name: 'Додстер',
		imageUrl: '/assets/products/dodster.webp',
		categoryId: 3
	},
	{
		name: 'Острый Додстер 🌶️🌶️',
		imageUrl: '/assets/products/ostryj-dodster.webp',
		categoryId: 3
	},
	{
		name: 'Банановый молочный коктейль',
		imageUrl: '/assets/products/bananovyj-molochnyj-koktejl.webp',
		categoryId: 4
	},
	{
		name: 'Карамельное яблоко молочный коктейль',
		imageUrl: '/assets/products/karamelnoe-yabloko-molochnyj-koktejl.webp',
		categoryId: 4
	},
	{
		name: 'Молочный коктейль с печеньем Орео',
		imageUrl: '/assets/products/molochnyj-koktejl-s-pechenem-oreo.webp',
		categoryId: 4
	},
	{
		name: 'Классический молочный коктейль 👶',
		imageUrl: '/assets/products/klassicheskij-molochnyj-koktejl.webp',
		categoryId: 4
	},
	{
		name: 'Ирландский Капучино',
		imageUrl: '/assets/products/irlandskij-kapuchino.webp',
		categoryId: 5
	},
	{
		name: 'Кофе Карамельный капучино',
		imageUrl: '/assets/products/kofe-karamelnyj-kapuchino.webp',
		categoryId: 5
	},
	{
		name: 'Кофе Кокосовый латте',
		imageUrl: '/assets/products/kofe-kokosovyj-latte.webp',
		categoryId: 5
	},
	{
		name: 'Кофе Американо',
		imageUrl: '/assets/products/kofe-amerikano.webp',
		categoryId: 5
	},
	{
		name: 'Кофе Латте',
		imageUrl: '/assets/products/kofe-latte.webp',
		categoryId: 5
	}
]
