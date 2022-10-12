const path = '/productions/ctry-houses/alcoves'

const getReviewPath = (id: number) => {
	return `${path}/alcove_${id}/review.png`
}

const getGalleryPath = (picId: number) => {
	return `${path}/gallery/${picId}.png`
}

const getReviewsPath = (id: number, reviewId: number) => {
	return `${path}/alcove_${id}/review_${reviewId}.png`
}

export const alcoves = []

export const alcovesGallery = [
	{
		label: 'alcove_1',
		review: getGalleryPath(1)
	},
	{
		label: 'alcove_2',
		review: getGalleryPath(2)
	}
]
