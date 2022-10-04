import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

import { clsxMerge } from '@/lib/clsxMerge'

type NextImageProps = {
	useSkeleton?: boolean
	imgClassName?: string
	blurClassName?: string
	alt: string
	width: string | number
} & (
	| {
			width: string | number
			height: string | number
	  }
	| {
			layout: 'fill'
			width?: string | number
			height?: string | number
	  }
) &
	ImageProps

export default function Img({ useSkeleton = false, src, width, height, alt, className, imgClassName, blurClassName, ...rest }: NextImageProps): JSX.Element {
	const [status, setStatus] = useState(useSkeleton ? 'loading' : 'complete')
	const widthIsSet: boolean = className?.includes('w-') ?? false

	return (
		<figure style={!widthIsSet ? { width: `${width}px` } : undefined} className={className}>
			<Image
				className={clsxMerge(imgClassName, status === 'loading' && clsxMerge('animate-pulse', blurClassName))}
				onLoadingComplete={(): void => setStatus('complete')}
				layout='responsive'
				height={height}
				src={src}
				width={width}
				alt={alt}
				{...rest}
			/>
		</figure>
	)
}
