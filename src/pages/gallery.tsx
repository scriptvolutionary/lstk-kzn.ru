import Hero from '@/components/Hero'
import Container from '@/components/layout/Container'
import AdressSection from '@/components/sections/contacts/AdressSection'
import ContactsDataSection from '@/components/sections/contacts/ContactsDataSection'

export default function ContactsPage(): JSX.Element {
	return (
		<Container>
			<main className='flex flex-col overflow-x-hidden scroll-smooth'>
				<Hero image='/background.png' label='Галерея' content='Наши работы всегда документируются!' />
				<ContactsDataSection />
				<AdressSection/>
			</main>
		</Container>
	)
}
