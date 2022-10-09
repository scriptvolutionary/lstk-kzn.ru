import Img from '@/components/Img'
import Section from '@/components/Section'

const partners = [
	{ label: 'TIMESTEEL', review: '/partners/timesteel.png' },
	{ label: 'РоссельхозБанк', review: '/partners/rosselhoz.jpg' },
	{ label: 'СБЕРБАНК', review: '/partners/sberbank.svg' },
	{ label: 'ВСО ПРОФИЛЬ', review: '/partners/vsoprofile.jpg' },
	{ label: 'АртВР - Строй', review: '/partners/artvr.png' },
	{ label: 'PROFHOLOD', review: '/partners/profholod.png' },
	{ label: 'AFD AGRO', review: '/partners/afgagro.svg' }
]
const PartnersSection = (): JSX.Element => {
	return (
		<Section label='Наши партнеры' labelClassName='text-center'>
			<div className='flex flex-wrap place-items-center items-center justify-center gap-8 lg:gap-16'>
				{partners?.map(p => (
					<div className='h-auto w-32 md:w-44 lg:w-56' key={p?.label}>
						<Img className='h-auto w-full' width={400} height={200} src={p?.review} alt={p?.label} />
					</div>
				))}
			</div>
		</Section>
	)
}

export default PartnersSection
