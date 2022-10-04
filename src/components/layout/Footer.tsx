import UnderlineLink from '@/components/links/UnderlineLink'

const footerLinks = [
	{
		label: 'Навигация',
		content: [
			{ label: 'Компания', href: '/' },
			{ label: 'Продукция', href: '/productions' },
			{ label: 'Технологии', href: '/technology' },
			{ label: 'Галерея', href: '/gallery' },
			{ label: 'Контакты', href: '/contacts' }
		]
	},
	{
		label: 'Продукция и проекты',
		content: [
			{ label: 'Малые формы', href: '/' },
			{ label: 'Дачные дома', href: '/productions' },
			{ label: 'Частные дома', href: '/technology' },
			{ label: 'Жилые многоквартирные дома', href: '/gallery' },
			{ label: 'Бизнес объекты', href: '/contacts' },
			{ label: 'Промышленные объекты', href: '/contacts' },
			{ label: 'Сельхоз объекты', href: '/contacts' }
		]
	},
	{
		label: 'Технологии компании',
		content: [
			{ label: 'Строительство', href: '/' },
			{ label: 'ЛСТК', href: '/' }
		]
	}
]

export default function Footer(): JSX.Element {
	return (
		<footer className='block h-max w-screen bg-neutral text-neutral-content'>
			<div className='container mx-auto py-8 lg:py-16'>
				<div className='footer p-0'>
					{footerLinks?.map(l => (
						<div key={l?.label}>
							<span className='footer-title lg:text-lg'>{l?.label}</span>
							{l?.content?.map(c => (
								<UnderlineLink className='text-sm lg:text-base' href={c?.href} variant='neutral' key={c?.label}>
									{c?.label}
								</UnderlineLink>
							))}
						</div>
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
