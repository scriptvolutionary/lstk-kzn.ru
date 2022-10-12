const path = '/productions/ctry-houses/baths'

const getReviewPath = (id: number) => {
	return `${path}/bath_${id}/review.png`
}

const getGalleryPath = (picId: number) => {
	return `${path}/gallery/${picId}.png`
}

const getReviewsPath = (id: number, reviewId: number) => {
	return `${path}/bath_${id}/review_${reviewId}.png`
}

export const baths = []

export const bathsGallery = [
	{
		label: 'bath_1',
		review: getGalleryPath(1)
	},
	{
		label: 'bath_2',
		review: getGalleryPath(2)
	},
	{
		label: 'bath_3',
		review: getGalleryPath(3)
	}
]
