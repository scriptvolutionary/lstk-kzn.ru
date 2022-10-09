import Hero from '@/components/Hero'
import Container from '@/components/layout/Container'
import AboutSection from '@/components/sections/home/AboutSection'
import OrderVariantsSection from '@/components/sections/home/OrderVariantsSection'
import PartnersSection from '@/components/sections/home/PartnersSection'
import WhyWeSection from '@/components/sections/home/WhyWeSection'

export default function IndexPage(): JSX.Element {
	return (
		<Container>
			<main className='flex flex-col overflow-x-hidden scroll-smooth'>
				<Hero image='/background.png' label='СК-ЛСТК Гарант' content='С вниманием к клиенту, с любовью к технологиям!' />
				<AboutSection />
				<WhyWeSection />
				<OrderVariantsSection />
				<PartnersSection />
			</main>
		</Container>
	)
}
