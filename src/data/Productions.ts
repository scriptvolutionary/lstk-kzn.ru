const path = '/productions'
const prev = 'preview.png'
const bg = 'background.png'

export const productions = [
	{
		href: '/productions/small-forms',
		label: 'Малые формы',
		description: 'Гаражи, теплицы, террасы, перголы и прочее',
		preview: `${path}/sm-forms/${prev}`,
		background: `${path}/sm-forms/${bg}`,
		content: [{ label: 'Гаражи', subLabel: 'Гаражи по технологии ЛСТК', description: '' }]
	},
	{
		href: '/productions/country-houses',
		label: 'Дачные дома и здания',
		description: 'Бани, домики для базы отдыха и другие',
		preview: `${path}/ctry-houses/${prev}`,
		background: `${path}/ctry-houses/${bg}`,
		content: [
			{ label: 'Дачные дома', subLabel: 'Дачные дома по технологии ЛСТК', description: '' },
			{ label: 'Бани', subLabel: 'Бани по технологии ЛСТК', description: '' },
			{ label: 'Беседки', subLabel: 'Беседки по технологии ЛСТК', description: '' }
		]
	},
	{
		href: '/productions/private-houses',
		label: 'Частные дома',
		description: 'Одноэтажные, двухэтажные частные дома и другие',
		preview: `${path}/priv-houses/${prev}`,
		background: `${path}/priv-houses/${bg}`,
		content: [
			{ label: 'Одноэтажные дома', subLabel: 'Одноэтажные дома по технологии ЛСТК', description: '' },
			{ label: 'Двухэтажные дома', subLabel: 'Двухэтажные дома по технологии ЛСТК', description: '' }
		]
	},
	{
		href: '/productions/apartment-houses',
		label: 'Жилые многоквартирные дома',
		description: 'Многоквартирные дома, таунхаусы',
		preview: `${path}/aprtmt-houses/${prev}`,
		background: `${path}/aprtmt-houses/${bg}`,
		content: [{ label: 'Таунхаусы', subLabel: 'Таунхаусы по технологии ЛСТК', description: '' }]
	},
	{
		href: '/productions/business-objects/',
		label: 'Бизнес объекты',
		description: 'Магазины, офисы, автомойки, СТО и другие',
		preview: `${path}/bus-objects/${prev}`,
		background: `${path}/bus-objects/${bg}`,
		content: [
			{ label: 'Магазины', subLabel: 'Магазины по технологии ЛСТК', description: '' },
			{ label: 'Автомойки', subLabel: 'Автомойки по технологии ЛСТК', description: '' },
			{ label: 'Автосеривисы', subLabel: 'Автосеривисы по технологии ЛСТК', description: '' }
		]
	},
	{
		href: '/productions/industrial-objects',
		label: 'Промышленные объекты',
		description: 'Ангары, цеха, склады и другие',
		preview: `${path}/indust-objects/${prev}`,
		background: `${path}/indust-objects/${bg}`,
		content: [{ label: 'Ангары', subLabel: 'Ангары по технологии ЛСТК', description: '' }]
	},
	{
		href: '/productions/agricultural-objects',
		label: 'Сельхоз объекты',
		description: 'Птичники, коровники, зернохранилища, овощехранилища и другие',
		preview: `${path}/agr-objects/${prev}`,
		background: `${path}/agr-objects/${bg}`,
		content: []
	}
]
