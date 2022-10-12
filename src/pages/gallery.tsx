import { awningsGallery } from '@/data/agr-objects/Awnings'
import { _housesGallery } from '@/data/aprtmt-houses/Houses'
import { townhousesGallery } from '@/data/aprtmt-houses/Townhouses'
import { alcovesGallery } from '@/data/ctry-houses/Alcoves'
import { bathsGallery } from '@/data/ctry-houses/Baths'
import { housesGallery } from '@/data/ctry-houses/Houses'
import { garagesGallery } from '@/data/sm-forms/Garages'

import Hero from '@/components/Hero'
import Container from '@/components/layout/Container'
import Section from '@/components/Section'

export default function ContactsPage(): JSX.Element {
	return (
		<Container title='Контакты'>
			<main className='flex flex-col overflow-x-hidden scroll-smooth'>
				<Hero image='/background.png' label='Галерея' content='Наши работы всегда документируются!' />
				<Section label='' id='show'>
					<div className='grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-8'>
						{garagesGallery?.map(g => (
							<img className='w-full rounded lg:h-64' src={g?.review} alt={g?.label} id={g?.label} key={g?.label} />
						))}
						{housesGallery?.map(g => (
							<img className='w-full rounded lg:h-64' src={g?.review} alt={g?.label} id={g?.label} key={g?.label} />
						))}
						{bathsGallery?.map(g => (
							<img className='w-full rounded lg:h-64' src={g?.review} alt={g?.label} id={g?.label} key={g?.label} />
						))}
						{alcovesGallery?.map(g => (
							<img className='w-full rounded lg:h-64' src={g?.review} alt={g?.label} id={g?.label} key={g?.label} />
						))}
						{_housesGallery?.map(g => (
							<img className='w-full rounded lg:h-64' src={g?.review} alt={g?.label} id={g?.label} key={g?.label} />
						))}
						{townhousesGallery?.map(g => (
							<img className='w-full rounded lg:h-64' src={g?.review} alt={g?.label} id={g?.label} key={g?.label} />
						))}
						{awningsGallery?.map(g => (
							<img className='w-full rounded lg:h-64' src={g?.review} alt={g?.label} id={g?.label} key={g?.label} />
						))}
					</div>
				</Section>
			</main>
		</Container>
	)
}
