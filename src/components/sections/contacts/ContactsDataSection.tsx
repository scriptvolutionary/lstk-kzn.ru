import { NextRouter, useRouter } from 'next/router';

import Section from '@/components/Section';

const ContactsDataSection = (): JSX.Element => {
	const router: NextRouter = useRouter()

	return (
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
	)
}

export default ContactsDataSection
