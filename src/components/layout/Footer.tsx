import UnderlineLink from '@/components/links/UnderlineLink'

const footerLinks = [
	{ label: 'Малые формы', href: '/small-fomrs' },
	{ label: 'Дачные дома и здания', href: '/country-houses' },
	{ label: 'Частные дома', href: '/private-houses' },
	{ label: 'Жилые многоквартирные дома', href: '/apartment-houses' },
	{ label: 'Бизнес объекты', href: '/business-objects' },
	{ label: 'Промышленные объекты', href: '/industrial-objects' },
	{ label: 'Сельхоз объекты', href: '/agricultural-objects' }
]

export default function Footer(): JSX.Element {
	return (
		<footer className='block h-max w-screen bg-neutral text-neutral-content'>
			<div className='container mx-auto py-8 lg:py-16'>
				<div className='flex flex-col justify-between gap-4 p-0 xl:flex-row xl:items-center'>
					{footerLinks?.map(l => (
						<UnderlineLink className='max-w-max text-sm xl:text-base' href={l?.href} variant='neutral' key={l?.label}>
							{l?.label}
						</UnderlineLink>
					))}
				</div>
			</div>
			<div className='container mx-auto'>
				<div className='flex items-center justify-start border-t py-4 lg:py-8'>
					<p className='text-sm font-medium lg:text-base'>ООО «СК-ЛСТК Гарант» @ 2022 — Все права защищены</p>
				</div>
			</div>
		</footer>
	)
}
