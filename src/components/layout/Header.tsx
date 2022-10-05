import { NextRouter, useRouter } from 'next/router'
import { CgMenuRight } from 'react-icons/cg'
import { FaEnvelope, FaLocationArrow, FaPhone } from 'react-icons/fa'

import Img from '@/components/Img'
import ArrowButtonLink from '@/components/links/ArrowButtonLink'
import PrimaryLink from '@/components/links/PrimaryLink'
import UnderlineLink from '@/components/links/UnderlineLink'
import ButtonModal from '@/components/modals/ButtonModal'
import UnderlineModal from '@/components/modals/UnderlineModal'

const contactLinks = [
	{ icon: <FaPhone />, label: '+7 (909) 306-77-79', href: 'tel:+7 (909) 306-77-79' },
	{ icon: <FaEnvelope />, label: 'lstk-kzn@mail.ru', href: 'mailto:lstk-kzn@mail.ru' }
]

const headerLinks = [
	{ label: 'Компания', href: '/' },
	{
		label: 'Продукция',
		href: '/productions',
		content: [
			{ label: 'Малые формы', href: '/productions/small-forms' },
			{ label: 'Дачные дома и здания', href: '/productions/small-forms' },
			{ label: 'Частные дома', href: '/productions/small-forms' },
			{ label: 'Жилые многоквартирные дома', href: '/productions/small-forms' },
			{ label: 'Бизнес объекты', href: '/productions/small-forms' },
			{ label: 'Промышленные объекты', href: '/productions/small-forms' },
			{ label: 'Сельхоз объекты', href: '/productions/small-forms' }
		]
	},
	{
		label: 'Технология',
		href: '/technology',
		content: [
			{ label: 'Строительство', href: '/technology' },
			{ label: 'ЛСТК', href: '/technology' }
		]
	},
	{ label: 'Галерея', href: '/gallery' },
	{ label: 'Контакты', href: '/contacts' }
]

export default function Header(): JSX.Element {
	const router: NextRouter = useRouter()

	return (
		<>
			<div className='hidden w-screen bg-primary text-primary-content sm:block'>
				<div className='container mx-auto flex h-[5vh] items-center justify-between'>
					<div className='flex w-full items-center justify-between'>
						<UnderlineModal className='text-sm lg:text-base' modalKey='location' variant='primary' icon={<FaLocationArrow />}>
							г. Казань
						</UnderlineModal>
						<div className='flex items-center sm:gap-4 md:gap-8'>
							{contactLinks?.map(l => (
								<UnderlineLink className='text-sm lg:text-base' href={l?.href} variant='primary' icon={l?.icon} newTab={false} key={l?.label}>
									{l?.label}
								</UnderlineLink>
							))}
						</div>
					</div>
				</div>
			</div>
			<header className='sticky top-0 left-0 z-30 w-screen border-b bg-base-100 text-base-content'>
				<div className='container mx-auto flex h-[8vh] items-center justify-between'>
					<div className='flex w-full items-center justify-between'>
						<Img className='h-8 w-24 lg:h-10 lg:w-32' width={320} height={100} src='/emblem.png' alt='Эмблема' />
						{headerLinks?.map(l =>
							!l?.content ? (
								<PrimaryLink
									className={
										router.pathname === l?.href
											? 'hidden text-sm font-semibold uppercase text-primary hover:text-primary-focus md:inline-flex lg:text-base'
											: 'hidden text-sm font-semibold uppercase text-base-content hover:text-primary md:inline-flex lg:text-base'
									}
									href={l?.href}
									key={l?.label}
								>
									{l.label}
								</PrimaryLink>
							) : (
								<div className='dropdown-hover dropdown hidden md:block' key={l?.label}>
									<label tabIndex={0}>
										<PrimaryLink
											className={
												router.asPath === l?.href
													? ' text-sm font-semibold uppercase text-primary hover:text-primary-focus lg:text-base'
													: ' text-sm font-semibold uppercase text-base-content hover:text-primary lg:text-base'
											}
											href={l?.href}
										>
											{l?.label}
										</PrimaryLink>
									</label>
									<div className='dropdown-content w-72 border-b bg-base-100 pt-[26px]' tabIndex={0}>
										{l?.content?.map(c => (
											<ArrowButtonLink
												className={
													router.asPath !== c?.href
														? 'btn-sm font-medium normal-case lg:btn-md'
														: 'btn-sm cursor-not-allowed select-none font-medium normal-case lg:btn-md'
												}
												variant={router.asPath !== c?.href ? 'ghost' : 'primary'}
												size='block'
												href={c?.href}
												key={c?.label}
											>
												{c?.label}
											</ArrowButtonLink>
										))}
									</div>
								</div>
							)
						)}
						<ButtonModal className='inline-flex md:hidden' modalKey='container' variant='ghost'>
							<CgMenuRight className='h-4 w-4' />
						</ButtonModal>
					</div>
				</div>
			</header>
		</>
	)
}
