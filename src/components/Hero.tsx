import { NextRouter, useRouter } from 'next/router'
import { GrFormDown } from 'react-icons/gr'
import { ImUser } from 'react-icons/im'
import Slider from 'react-slick'

import { productions } from '@/data/Productions'

import ArrowUnderlineLink from '@/components/links/ArrowUnderlineLink'
import ButtonLink from '@/components/links/ButtonLink'

type HeroProps = {
	image: string
	label: string
	content: string
}

export default function Hero({ image, label, content }: HeroProps): JSX.Element {
	const router: NextRouter = useRouter()

	const parallax = {
		background: `url('${image}')`,
		backgroundPosition: `center`,
		backgroundSize: `cover`,
		backgroundAttachment: `fixed`
	}

	const options = {
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,
		infinite: true,
		speed: 600,
		vertical: true,
		slidesToShow: 3,
		slidesToScroll: 1
	}

	const optionsMobile = {
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,
		infinite: true,
		speed: 600,
		slidesToShow: 1,
		slidesToScroll: 1
	}

	return (
		<section className='card-parallax overlow-x-hidden card h-[86vh] rounded-none bg-base-100 sm:h-[87vh]'>
			<figure className='h-full w-screen'>
				<div className='h-full w-full' style={parallax}></div>
			</figure>
			<div className='container card-body mx-auto p-0'>
				<div className='flex h-full w-full items-center'>
					<div className='flex w-full flex-col items-center justify-between gap-16 lg:flex-row'>
						{router.pathname === '/' && (
							<div className='h-max w-full lg:hidden'>
								<Slider {...optionsMobile}>
									{productions?.map(p => (
										<div className='cursor-pointer' onClick={() => router.push(p?.href)} key={p?.label}>
											<div className='card image-full w-full'>
												<figure className='h-44 w-full'>
													<img className='w-full' src={p?.preview} alt={p?.label} />
												</figure>
												<div className='card-body'>
													<h2 className='card-title text-base'>{p?.label}</h2>
													<p className='text-sm'>{p?.description}</p>
													<div className='card-actions justify-end'>
														<ArrowUnderlineLink className='text-sm' href={p?.href} variant='neutral'>
															Подробнее
														</ArrowUnderlineLink>
													</div>
												</div>
											</div>
										</div>
									))}
								</Slider>
							</div>
						)}
						<div className='flex w-full flex-col items-center text-center sm:items-start sm:text-justify lg:max-w-[70%]'>
							<h1 className='card-title mb-4 text-6xl font-extrabold text-primary lg:text-8xl'>{label}</h1>
							<p className='mb-16 text-xl font-semibold lg:mb-32'>{content}</p>
							{router.pathname === '/' && (
								<ButtonLink
									className='justify-between normal-case'
									size='wide'
									href='tel:+7 960 037-53-68'
									newTab={false}
									icon={<ImUser />}
									variant='outline'
								>
									Консультация
								</ButtonLink>
							)}
						</div>
						{router.pathname === '/' && (
							<div className='hidden h-max w-full max-w-[30%] lg:block'>
								<Slider {...options}>
									{productions?.map(p => (
										<div className='cursor-pointer' onClick={() => router.push(p?.href)} key={p?.label}>
											<div className='card image-full w-full'>
												<figure className='h-44 w-full'>
													<img className='w-full' src={p?.preview} alt={p?.label} />
												</figure>
												<div className='card-body'>
													<h2 className='card-title text-base'>{p?.label}</h2>
													<p className='text-sm'>{p?.description}</p>
													<div className='card-actions justify-end'>
														<ArrowUnderlineLink className='text-sm' href={p?.href} variant='neutral'>
															Подробнее
														</ArrowUnderlineLink>
													</div>
												</div>
											</div>
										</div>
									))}
								</Slider>
							</div>
						)}
					</div>
				</div>
				<div className='card-actions mb-4 justify-center'>
					<ButtonLink className='btn-sm animate-bounce' href='#show' variant='ghost'>
						<GrFormDown />
					</ButtonLink>
				</div>
			</div>
		</section>
	)
}
