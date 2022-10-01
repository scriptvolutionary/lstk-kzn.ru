import { ReactNode } from 'react'
import { FaEnvelope, FaLocationArrow, FaPhone } from 'react-icons/fa'

import { Img } from '../Img'
import UnderlineLink from '../links/UnderlineLink'
import UnderlineModal from '../modals/UnderlineModal'

type ContainerProps = {
	children: ReactNode
}

export default function Container({ children }: ContainerProps): JSX.Element {
	return (
		<>
			<div className='drawer drawer-end'>
				<input id='my-drawer-4' type='checkbox' className='drawer-toggle' />
				<div className='drawer-content'>
					<div className='w-full bg-base-100 text-base-content'>
						<div className='hidden w-screen bg-primary text-primary-content sm:block'>
							<div className='container mx-auto flex h-[5vh] items-center justify-between'>
								<div className='flex w-full items-center justify-between'>
									<UnderlineModal className='sm:text-sm md:text-base' modalKey='location' variant='primary' icon={<FaLocationArrow />}>
										г. Казань
									</UnderlineModal>
									<div className='flex items-center sm:gap-4 md:gap-8'>
										<UnderlineLink
											className='sm:text-sm md:text-base'
											href='tel:+7 (909) 306-77-79'
											variant='primary'
											icon={<FaPhone />}
											newTab={false}
										>
											+7 (909) 306-77-79
										</UnderlineLink>
										<UnderlineLink
											className='sm:text-sm md:text-base'
											href='mailto:lstk-kzn@mail.ru'
											variant='primary'
											icon={<FaEnvelope />}
											newTab={false}
										>
											lstk-kzn@mail.ru
										</UnderlineLink>
									</div>
								</div>
							</div>
						</div>
						<header className='sticky top-0 w-screen bg-base-100 text-base-content'>
							<div className='container mx-auto flex h-[8vh] items-center justify-between'>
								<div className='flex w-full items-center justify-between'>
									<Img width={100} height={50} src='/emblem.png' alt='Эмблема' />
								</div>
							</div>
						</header>
					</div>
					{children}
					<footer>footer</footer>
				</div>
				<div className='drawer-side'>
					<label htmlFor='my-drawer-4' className='drawer-overlay'></label>
					<ul className='menu w-80 overflow-y-auto bg-base-100 p-4 text-base-content'>
						<li>
							<a>Sidebar Item 1</a>
						</li>
						<li>
							<a>Sidebar Item 2</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}
