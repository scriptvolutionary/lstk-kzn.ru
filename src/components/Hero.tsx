import { NextRouter, useRouter } from 'next/router'
import { FaCalculator } from 'react-icons/fa'
import { GrFormDown } from 'react-icons/gr'
import { ImUser } from 'react-icons/im'
import Slider from 'react-slick'

import ArrowUnderlineLink from '@/components/links/ArrowUnderlineLink'
import ButtonLink from '@/components/links/ButtonLink'
import ButtonModal from '@/components/modals/ButtonModal'

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

	return (
		<section className='card-parallax overlow-x-hidden card h-[92vh] rounded-none bg-base-100 sm:h-[87vh]'>
			<figure className='h-full w-screen'>
				<div className='h-full w-full' style={parallax}></div>
			</figure>
			<div className='container card-body mx-auto p-0'>
				<div className='flex h-full w-full items-center'>
					<div className='flex w-full items-center justify-between gap-2'>
						<div className='w-full lg:max-w-[70%]'>
							<h1 className='card-title text-center text-6xl font-extrabold text-primary sm:text-start lg:text-8xl'>{label}</h1>
							<p className='pt-4 text-center text-xl font-semibold sm:text-start'>{content}</p>
							{router.pathname === '/' && (
								<div className='flex flex-col items-center gap-4 pt-16 sm:flex-row lg:gap-8 lg:pt-32'>
									<ButtonModal className='justify-between' size='wide' modalKey='calculator' icon={<FaCalculator />} variant='accent'>
										Калькулятор
									</ButtonModal>
									<ButtonLink className='justify-between' size='wide' href='/contacts' icon={<ImUser />} variant='outline'>
										Консультация
									</ButtonLink>
								</div>
							)}
						</div>
						{router.pathname === '/' && (
							<div className='hidden h-max w-full max-w-[30%] lg:block'>
								<Slider {...options}>
									<div>
										<div className='card image-full w-full'>
											<figure className='h-44 w-full'>
												<img className='w-full' src='/productions/sm-forms/preview.png' alt='Малые формы' />
											</figure>
											<div className='card-body'>
												<h2 className='card-title text-base'>Продукция</h2>
												<p className='text-sm'>Описание</p>
												<div className='card-actions justify-end'>
													<ArrowUnderlineLink className='text-sm' href='/' variant='neutral'>
														Подробнее
													</ArrowUnderlineLink>
												</div>
											</div>
										</div>
									</div>
									<div>
										<div className='card image-full w-full'>
											<figure className='h-44 w-full'>
												<img className='w-full' src='/productions/sm-forms/preview.png' alt='Малые формы' />
											</figure>
											<div className='card-body'>
												<h2 className='card-title text-base'>Продукция</h2>
												<p className='text-sm'>Описание</p>
												<div className='card-actions justify-end'>
													<ArrowUnderlineLink className='text-sm' href='/' variant='neutral'>
														Подробнее
													</ArrowUnderlineLink>
												</div>
											</div>
										</div>
									</div>
									<div>
										<div className='card image-full w-full'>
											<figure className='h-44 w-full'>
												<img className='w-full' src='/productions/sm-forms/preview.png' alt='Малые формы' />
											</figure>
											<div className='card-body'>
												<h2 className='card-title text-base'>Продукция</h2>
												<p className='text-sm'>Описание</p>
												<div className='card-actions justify-end'>
													<ArrowUnderlineLink className='text-sm' href='/' variant='neutral'>
														Подробнее
													</ArrowUnderlineLink>
												</div>
											</div>
										</div>
									</div>
									<div>
										<div className='card image-full w-full'>
											<figure className='h-44 w-full'>
												<img className='w-full' src='/productions/sm-forms/preview.png' alt='Малые формы' />
											</figure>
											<div className='card-body'>
												<h2 className='card-title text-base'>Продукция</h2>
												<p className='text-sm'>Описание</p>
												<div className='card-actions justify-end'>
													<ArrowUnderlineLink className='text-sm' href='/' variant='neutral'>
														Подробнее
													</ArrowUnderlineLink>
												</div>
											</div>
										</div>
									</div>
								</Slider>
							</div>
						)}
					</div>
				</div>
				<div className='card-actions mb-4 justify-center'>
					<ButtonLink className='btn-sm animate-bounce' href='#guid' variant='ghost'>
						<GrFormDown />
					</ButtonLink>
				</div>
			</div>
		</section>
	)
}
