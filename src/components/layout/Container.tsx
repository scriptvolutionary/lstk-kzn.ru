import { NextRouter, useRouter } from 'next/router'
import { ReactNode } from 'react'
import { FaEnvelope, FaLocationArrow, FaPhone } from 'react-icons/fa'

import Header from '@/components/layout/Header'
import ArrowButtonLink from '@/components/links/ArrowButtonLink'
import ButtonLink from '@/components/links/ButtonLink'

type ContainerProps = {
	children: ReactNode
}

export default function Container({ children }: ContainerProps): JSX.Element {
	const router: NextRouter = useRouter()
	return (
		<div className='drawer drawer-end'>
			<input className='drawer-toggle' id='container' type='checkbox' />
			<div className='drawer-content'>
				<Header />
				{children}
				<footer>footer</footer>
			</div>
			<div className='drawer-side'>
				<label htmlFor='container' className='drawer-overlay'></label>
				<div className='w-72 overflow-y-auto bg-base-100 p-4 text-base-content'>
					<ArrowButtonLink
						className={router.asPath !== '/' ? '' : 'cursor-not-allowed select-none'}
						variant={router.asPath !== '/' ? 'ghost' : 'primary'}
						size='block'
						direction='reverse'
						href='/'
					>
						Компания
					</ArrowButtonLink>
					<ArrowButtonLink
						className={router.asPath !== '/productions' ? '' : 'cursor-not-allowed select-none'}
						variant={router.asPath !== '/productions' ? 'ghost' : 'primary'}
						size='block'
						direction='reverse'
						href='/productions'
					>
						Продукция
					</ArrowButtonLink>
					<ArrowButtonLink
						className={router.asPath !== '/technology' ? '' : 'cursor-not-allowed select-none'}
						variant={router.asPath !== '/technology' ? 'ghost' : 'primary'}
						size='block'
						direction='reverse'
						href='/productions'
					>
						Технология
					</ArrowButtonLink>
					<ArrowButtonLink
						className={router.asPath !== '/gallery' ? '' : 'cursor-not-allowed select-none'}
						variant={router.asPath !== '/gallery' ? 'ghost' : 'primary'}
						size='block'
						direction='reverse'
						href='/gallery'
					>
						Галерея
					</ArrowButtonLink>
					<ArrowButtonLink
						className={router.asPath !== '/contacts' ? '' : 'cursor-not-allowed select-none'}
						variant={router.asPath !== '/contacts' ? 'ghost' : 'primary'}
						size='block'
						direction='reverse'
						href='/contacts'
					>
						Контакты
					</ArrowButtonLink>
					<div className='absolute bottom-4 right-0 w-full'>
						<div className='flex flex-col items-center justify-center gap-4 px-4'>
							<div className='flex items-center gap-4'>
								<ButtonLink href='/' variant='ghost'>
									<FaLocationArrow />
								</ButtonLink>
								<ButtonLink href='/' variant='ghost'>
									<FaPhone />
								</ButtonLink>
								<ButtonLink href='/' variant='ghost'>
									<FaEnvelope />
								</ButtonLink>
							</div>
							<p className='text-sm font-medium'>ООО «СК-ЛСТК Гарант» &copy; 2022</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
