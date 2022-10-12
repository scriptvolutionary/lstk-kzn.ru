import Hero from '@/components/Hero'
import Container from '@/components/layout/Container'
import AdressSection from '@/components/sections/contacts/AdressSection'
import ContactsDataSection from '@/components/sections/contacts/ContactsDataSection'

export default function ContactsPage(): JSX.Element {
	return (
		<Container title='Контакты'>
			<main className='flex flex-col overflow-x-hidden scroll-smooth'>
				<Hero image='/background.png' label='Контакты' content='Всегда на связи!' />
				<ContactsDataSection />
				<AdressSection/>
			</main>
		</Container>
	)
}
