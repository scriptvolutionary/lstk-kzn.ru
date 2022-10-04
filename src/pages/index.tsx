import Hero from '@/components/Hero'
import Container from '@/components/layout/Container'

export default function IndexPage(): JSX.Element {
	return (
		<Container>
			<main className='flex flex-col overflow-x-hidden scroll-smooth'>
				<Hero image='/background.png' label='СК-ЛСТК Гарант' content='С вниманием к клиенту, с любовью к технологиям!' />
			</main>
		</Container>
	)
}
