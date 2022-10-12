const path = '/productions/agr-objects/awnings'

const getReviewPath = (id: number) => {
	return `${path}/awning_${id}/review.png`
}

const getGalleryPath = (picId: number) => {
	return `${path}/gallery/${picId}.png`
}

const getReviewsPath = (id: number, reviewId: number) => {
	return `${path}/awning_${id}/review_${reviewId}.png`
}

export const awnings = []

export const awningsGallery = [
	{
		label: 'awning_1',
		review: getGalleryPath(1)
	},
	{
		label: 'awning_2',
		review: getGalleryPath(2)
	}
]
