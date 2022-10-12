import { NextRouter, useRouter } from 'next/router'
import { FaEnvelope, FaLocationArrow, FaPhone } from 'react-icons/fa'

import ArrowButtonLink from '@/components/links/ArrowButtonLink'
import ButtonLink from '@/components/links/ButtonLink'
import ButtonModal from '@/components/modals/ButtonModal'

export default function Aside(): JSX.Element {
	const router: NextRouter = useRouter()

	return (
		<aside className='drawer-side h-[94vh] overflow-x-hidden overflow-y-hidden lg:h-screen'>
			<label htmlFor='container' className='drawer-overlay'></label>
			<div className='flex w-72 flex-col gap-4 bg-base-100 p-4 text-base-content'>
				<ButtonLink
					className={router.asPath !== '/' ? '' : 'cursor-not-allowed select-none'}
					variant={router.asPath !== '/' ? 'outline' : 'primary'}
					size='block'
					direction='reverse'
					href='/'
				>
					Компания
				</ButtonLink>
				<div className='flex flex-col items-end'>
					<ButtonModal
						className='w-64'
						variant={
							router.asPath ===
							('/small-forms' ||
								'/country-houses' ||
								'/private-houses' ||
								'/apartment-houses' ||
								'/business-objects' ||
								'/industrial-objects' ||
								'/agricultural-objects')
								? 'primary'
								: 'outline'
						}
						size='block'
						direction='reverse'
					>
						Продукция
					</ButtonModal>
					<ArrowButtonLink
						href='/small-forms'
						direction='reverse'
						size='block'
						className={
							router.asPath !== '/small-forms'
								? 'btn-sm w-60 text-justify normal-case'
								: 'cursor-not-allowed select-none text-justify normal-case'
						}
						variant={router.asPath !== '/small-forms' ? 'ghost' : 'primary'}
					>
						Малые формы
					</ArrowButtonLink>
					<ArrowButtonLink
						href='/country-houses'
						direction='reverse'
						size='block'
						className={
							router.asPath !== '/country-houses'
								? 'btn-sm w-60 text-justify normal-case'
								: 'cursor-not-allowed select-none text-justify normal-case'
						}
						variant={router.asPath !== '/country-houses' ? 'ghost' : 'primary'}
					>
						Дачные дома
					</ArrowButtonLink>
					<ArrowButtonLink
						href='/private-houses'
						direction='reverse'
						size='block'
						className={
							router.asPath !== '/private-houses'
								? 'btn-sm w-60 text-justify normal-case'
								: 'cursor-not-allowed select-none text-justify normal-case'
						}
						variant={router.asPath !== '/private-houses' ? 'ghost' : 'primary'}
					>
						Частные дома
					</ArrowButtonLink>
					<ArrowButtonLink
						href='/aparment-houses'
						direction='reverse'
						size='block'
						className={
							router.asPath !== '/aparment-houses'
								? 'btn-sm w-60 text-justify normal-case'
								: 'cursor-not-allowed select-none text-justify normal-case'
						}
						variant={router.asPath !== '/aparment-houses' ? 'ghost' : 'primary'}
					>
						Жилые многокв. дома
					</ArrowButtonLink>
					<ArrowButtonLink
						href='/business-objects'
						direction='reverse'
						size='block'
						className={
							router.asPath !== '/business-objects'
								? 'btn-sm w-60 text-justify normal-case'
								: 'cursor-not-allowed select-none text-justify normal-case'
						}
						variant={router.asPath !== '/business-objects' ? 'ghost' : 'primary'}
					>
						Бизнес объекты
					</ArrowButtonLink>
					<ArrowButtonLink
						href='/industrial-objects'
						direction='reverse'
						size='block'
						className={
							router.asPath !== '/industrial-objects'
								? 'btn-sm w-60 text-justify normal-case'
								: 'cursor-not-allowed select-none text-justify normal-case'
						}
						variant={router.asPath !== '/industrial-objects' ? 'ghost' : 'primary'}
					>
						Промышл. объекты
					</ArrowButtonLink>
					<ArrowButtonLink
						href='/agricultural-objects'
						direction='reverse'
						size='block'
						className={
							router.asPath !== '/agricultural-objects'
								? 'btn-sm w-60 text-justify normal-case'
								: 'cursor-not-allowed select-none text-justify normal-case'
						}
						variant={router.asPath !== '/agricultural-objects' ? 'ghost' : 'primary'}
					>
						Сельхоз объекты
					</ArrowButtonLink>
				</div>
				<ButtonLink
					className={router.asPath !== '/technology' ? '' : 'cursor-not-allowed select-none'}
					variant={router.asPath !== '/technology' ? 'outline' : 'primary'}
					size='block'
					direction='reverse'
					href='/technology'
				>
					Технология
				</ButtonLink>
				<ButtonLink
					className={router.asPath !== '/gallery' ? '' : 'cursor-not-allowed select-none'}
					variant={router.asPath !== '/gallery' ? 'outline' : 'primary'}
					size='block'
					direction='reverse'
					href='/gallery'
				>
					Галерея
				</ButtonLink>
				<ButtonLink
					className={router.asPath !== '/contacts' ? '' : 'cursor-not-allowed select-none'}
					variant={router.asPath !== '/contacts' ? 'outline' : 'primary'}
					size='block'
					direction='reverse'
					href='/contacts'
				>
					Контакты
				</ButtonLink>
				<div className='absolute bottom-4 right-0 w-full'>
					<div className='flex flex-col items-center justify-center gap-4 px-4'>
						<div className='flex items-center gap-4'>
							<ButtonLink className='btn-sm' href='/contacts' variant='outline'>
								<FaLocationArrow />
							</ButtonLink>
							<ButtonLink className='btn-sm' href='tel:+7 (909) 306-77-79' variant='outline' newTab={false}>
								<FaPhone />
							</ButtonLink>
							<ButtonLink className='btn-sm' href='mailto:lstk-kzn@mail.ru' variant='outline' newTab={false}>
								<FaEnvelope />
							</ButtonLink>
						</div>
						<p className='text-sm font-medium'>ООО «СК-ЛСТК Гарант» @ 2022</p>
					</div>
				</div>
			</div>
		</aside>
	)
}
