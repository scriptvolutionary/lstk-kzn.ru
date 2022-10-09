import { useRouter } from 'next/router'

import Hero from '@/components/Hero'
import Container from '@/components/layout/Container'
import Section from '@/components/Section'

export default function ContactsPage(): JSX.Element {
	const router = useRouter()
	return (
		<Container>
			<main className='flex flex-col overflow-x-hidden scroll-smooth'>
				<Hero image='/background.png' label='Контакты' content='Всегда на связи!' />
				<Section label='Контактные данные' id='show'>
					<div className='grid gap-8 lg:grid-cols-3'>
						<div className='card cursor-pointer border bg-base-100' onClick={() => router.push('https://wa.me/89600375368')}>
							<div className='card-body'>
								<h2 className='card-title lg:text-xl'>WhatsApp</h2>
								<p className='text-justify lg:text-lg'>+7 960 037-53-68</p>
							</div>
						</div>
						<div className='card cursor-pointer border bg-base-100' onClick={() => router.push('tel:+7 960 037-53-68')}>
							<div className='card-body'>
								<h2 className='card-title lg:text-xl'>Телефон</h2>
								<p className='text-justify lg:text-lg'>+7 960 037-53-68</p>
							</div>
						</div>
						<div className='card cursor-pointer border bg-base-100' onClick={() => router.push('mailto:lstk-kzn@mail.ru')}>
							<div className='card-body'>
								<h2 className='card-title lg:text-xl'>Почта</h2>
								<p className='text-justify lg:text-lg'>lstk-kzn@mail.ru</p>
							</div>
						</div>
					</div>
				</Section>
				<Section label='Адрес' id='show'>
					<div className='inline-block h-96 w-full'>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d143543.23894010382!2d48.933221883232626!3d55.79561489265278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415ead2b7caccd99%3A0x7fcb77b9b5ad8c65!2z0JrQsNC30LDQvdGMLCDQoNC10YHQvy4g0KLQsNGC0LDRgNGB0YLQsNC9!5e0!3m2!1sru!2sru!4v1665312167497!5m2!1sru!2sru'
							className='h-full w-full'
							loading='lazy'
							referrerpolicy='no-referrer-when-downgrade'
						></iframe>
					</div>
				</Section>
			</main>
		</Container>
	)
}
