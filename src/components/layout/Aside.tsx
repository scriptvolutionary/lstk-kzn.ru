import { NextRouter, useRouter } from 'next/router'
import { FaEnvelope, FaLocationArrow, FaPhone } from 'react-icons/fa'

import ArrowButtonLink from '@/components/links/ArrowButtonLink'
import ButtonLink from '@/components/links/ButtonLink'

export default function Aside(): JSX.Element {
	const router: NextRouter = useRouter()

	return (
		<aside className='drawer-side'>
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
