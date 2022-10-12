const path = '/productions/aprtmt-houses/townhouses'

const getReviewPath = (id: number) => {
	return `${path}/townhouse_${id}/review.png`
}

const getGalleryPath = (picId: number) => {
	return `${path}/gallery/${picId}.png`
}

const getReviewsPath = (id: number, reviewId: number) => {
	return `${path}/townhouse_${id}/review_${reviewId}.png`
}

export const townhouses = []

export const townhousesGallery = [
	{
		label: 'townhouse_1',
		review: getGalleryPath(1)
	},
	{
		label: 'townhouse_2',
		review: getGalleryPath(2)
	}
]
