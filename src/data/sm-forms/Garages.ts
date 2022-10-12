const path = '/productions/sm-forms/garages'

const getReviewPath = (id: number) => {
	return `${path}/garage_${id}/review.png`
}

const getGalleryPath = (picId: number) => {
	return `${path}/gallery/${picId}.png`
}

const getReviewsPath = (id: number, reviewId: number) => {
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
		review: getReviewPath(1),
		reviews: [{ img: getReviewsPath(1, 1) }]
	},
	{
		id: 2,
		label: 'Гараж',
		about: 'На 1м/место с двухскатной кровлей',
		description: '',
		townProfile: '4 x 6 x 2,5',
		gateProfile: '2,5 x 2,2',
		price: '',
		review: getReviewPath(2),
		reviews: [{ img: getReviewsPath(2, 1) }]
	},
	{
		id: 3,
		label: 'Гараж',
		about: 'На 2м/место с двухскатной кровлей',
		description: '',
		townProfile: '7 x 6 x 2,5',
		gateProfile: '2,5 x 2,2',
		price: '',
		review: getReviewPath(3),
		reviews: [{ img: getReviewsPath(3, 1) }]
	},
	{
		id: 4,
		label: 'Гараж',
		about: 'На 1м/место с двухскатной кровлей',
		description: '',
		townProfile: '4 x 6 x 2,5',
		gateProfile: '2,5 x 2,2',
		price: '',
		review: getReviewPath(4),
		reviews: [{ img: getReviewsPath(4, 1) }]
	},
	{
		id: 5,
		label: 'Гараж',
		about: 'На 2м/место с двухскатной кровлей',
		description: '',
		townProfile: '7 x 6 x 2,5',
		gateProfile: '2,5 x 2,2',
		price: '',
		review: getReviewPath(5),
		reviews: [{ img: getReviewsPath(5, 1) }]
	},
	{
		id: 6,
		label: 'Гараж',
		about: 'Двухэтажный',
		description: '',
		townProfile: '4 x 6 x 5',
		gateProfile: '2,5 x 2,2',
		price: '',
		review: getReviewPath(6),
		reviews: [{ img: getReviewsPath(6, 1) }, { img: getReviewsPath(6, 2) }]
	}
]

export const garagesGallery = [
	{
		label: 'garage_1',
		review: getGalleryPath(1)
	},
	{
		label: 'garage_2',
		review: getGalleryPath(2)
	},
	{
		label: 'garage_3',
		review: getGalleryPath(3)
	},
	{
		label: 'garage_4',
		review: getGalleryPath(4)
	}
]
