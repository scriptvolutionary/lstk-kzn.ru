import Img from '@/components/Img'
import Section from '@/components/Section'

const partners = [
	{ label: 'TimeSteel', review: '/partners/timesteel.png' },
	{ label: 'Россельхоз Банк', review: '/partners/rosselhoz.jpg' },
	{ label: 'Сбер Банк', review: '/partners/sberbank.svg' }
]
const PartnersSection = (): JSX.Element => {
	return (
		<Section label='Наши партнеры' labelClassName='text-center'>
			<div className='flex flex-col items-center justify-around gap-8 md:flex-row'>
				{partners?.map(p => (
					<Img className='lg:h-22 w-52 lg:w-64' width={360} height={100} src={p?.review} alt={p?.label} key={p?.label} />
				))}
			</div>
		</Section>
	)
}

export default PartnersSection
