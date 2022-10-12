const path = '/productions/aprtmt-houses/houses'

const getReviewPath = (id: number) => {
	return `${path}/house_${id}/review.png`
}

const getGalleryPath = (picId: number) => {
	return `${path}/gallery/${picId}.png`
}

const getReviewsPath = (id: number, reviewId: number) => {
	return `${path}/house_${id}/review_${reviewId}.png`
}

export const houses = []

export const _housesGallery = [
	{
		label: 'house_1',
		review: getGalleryPath(1)
	},
	{
		label: 'house_2',
		review: getGalleryPath(2)
	},
	{
		label: 'house_3',
		review: getGalleryPath(3)
	},
	{
		label: 'house_4',
		review: getGalleryPath(4)
	}
]
