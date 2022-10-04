import { FaCalculator } from 'react-icons/fa'
import { GrFormDown } from 'react-icons/gr'
import { ImUser } from 'react-icons/im'
import Slider from 'react-slick'

import Container from '@/components/layout/Container'
import ArrowUnderlineLink from '@/components/links/ArrowUnderlineLink'
import ButtonLink from '@/components/links/ButtonLink'
import ButtonModal from '@/components/modals/ButtonModal'

export default function IndexPage(): JSX.Element {
	const parallax = {
		background: `url('/background.png')`,
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
		<Container>
			<main className='flex flex-col overflow-x-hidden scroll-smooth'>
				<section className='card-parallax overlow-x-hidden card h-[87vh] rounded-none bg-base-100'>
					<figure className='h-full w-screen'>
						<div className='h-full w-full' style={parallax}></div>
					</figure>
					<div className='container card-body mx-auto p-0'>
						<div className='flex h-full w-full items-center'>
							<div className='flex w-full items-center justify-between gap-2'>
								<div className='w-full max-w-[70%]'>
									<h1 className='card-title text-8xl font-extrabold text-primary'>СК-ЛСТК Гарант</h1>
									<p className='pt-4 text-xl font-semibold'>С вниманием к клиенту, с любовью к технологиям!</p>
									<div className='flex items-center gap-8 pt-32'>
										<ButtonModal modalKey='calculator' icon={<FaCalculator />} variant='accent'>
											Рассчитать стоимость
										</ButtonModal>
										<ButtonLink href='/contacts' icon={<ImUser />} variant='outline'>
											Бесплатная консультация
										</ButtonLink>
									</div>
								</div>
								<div className='h-max w-full max-w-[30%]'>
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
							</div>
						</div>
						<div className='card-actions mb-4 justify-center'>
							<ButtonLink className='btn-sm animate-bounce' href='#guid' variant='ghost'>
								<GrFormDown />
							</ButtonLink>
						</div>
					</div>
				</section>
			</main>
		</Container>
	)
}
