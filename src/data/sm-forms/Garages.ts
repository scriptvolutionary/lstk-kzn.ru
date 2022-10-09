const path = '/productions/sm-forms'

const getGarageReviewPath = (id: number) => {
	return `${path}/garage_${id}/review.png`
}

const getGaragesGalleryPath = (picId: number) => {
	return `${path}/gallery/${picId}.png`
}

const getGarageReviewsPath = (id: number, reviewId: number) => {
	return `${path}/garage_${id}/review_${reviewId}.png`
}

export const garages = [
	{
		id: 1,
		label: 'Гараж',
		about: 'На 1м/место с односкатной кровлей',
		description: '',
		townProfile: '4 x 6 x 3',
		gateProfile: '2,5 x 2,2',
		price: '',
		review: getGarageReviewPath(1),
		reviews: [{ img: getGarageReviewsPath(1, 1) }]
	},
	{
		id: 2,
		label: 'Гараж',
		about: 'На 1м/место с двухскатной кровлей',
		description: '',
		townProfile: '4 x 6 x 2,5',
		gateProfile: '2,5 x 2,2',
		price: '',
		review: getGarageReviewPath(2),
		reviews: [{ img: getGarageReviewsPath(2, 1) }]
	},
	{
		id: 3,
		label: 'Гараж',
		about: 'На 2м/место с двухскатной кровлей',
		description: '',
		townProfile: '7 x 6 x 2,5',
		gateProfile: '2,5 x 2,2',
		price: '',
		review: getGarageReviewPath(3),
		reviews: [{ img: getGarageReviewsPath(3, 1) }]
	},
	{
		id: 4,
		label: 'Гараж',
		about: 'На 1м/место с двухскатной кровлей',
		description: '',
		townProfile: '4 x 6 x 2,5',
		gateProfile: '2,5 x 2,2',
		price: '',
		review: getGarageReviewPath(4),
		reviews: [{ img: getGarageReviewsPath(4, 1) }]
	},
	{
		id: 5,
		label: 'Гараж',
		about: 'На 2м/место с двухскатной кровлей',
		description: '',
		townProfile: '7 x 6 x 2,5',
		gateProfile: '2,5 x 2,2',
		price: '',
		review: getGarageReviewPath(5),
		reviews: [{ img: getGarageReviewsPath(5, 1) }]
	},
	{
		id: 6,
		label: 'Гараж',
		about: 'Двухэтажный',
		description: '',
		townProfile: '4 x 6 x 5',
		gateProfile: '2,5 x 2,2',
		price: '',
		review: getGarageReviewPath(6),
		reviews: [{ img: getGarageReviewsPath(6, 1) }, { img: getGarageReviewsPath(6, 2) }]
	}
]

export const garagesGallery = [
	{
		label: 'Гараж',
		review: getGaragesGalleryPath(1)
	},
	{
		label: 'Гараж',
		review: getGaragesGalleryPath(2)
	},
	{
		label: 'Гараж',
		review: getGaragesGalleryPath(3)
	},
	{
		label: 'Гараж',
		review: getGaragesGalleryPath(4)
	}
]
