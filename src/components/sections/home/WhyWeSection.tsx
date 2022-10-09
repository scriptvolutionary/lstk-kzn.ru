import { IoPricetag, IoShieldCheckmark, IoTrendingUp } from 'react-icons/io5'

import Section from '@/components/Section'

const whyCards = [
	{
		icon: <IoShieldCheckmark className='h-56 w-32 text-primary' />,
		label: 'Надежность',
		description: 'По оценкам специалистов каркас ЛСТК прослужит вам не менее 100 лет'
	},
	{
		icon: <IoTrendingUp className='h-56 w-32 text-primary' />,
		label: 'Сроки',
		description: 'Средний срок возведения конструкции здания площадью 100м² составляет 7 дней'
	},
	{
		icon: <IoPricetag className='h-56 w-32 text-primary' />,
		label: 'Цена',
		description: 'Сделаем предварительную 3D-модель и назовем цену в течение трех дней'
	}
]
const WhyWeSection = (): JSX.Element => {
	return (
		<Section label='Почему мы?'>
			<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
				{whyCards?.map(c => (
					<div className='card border bg-base-100' key={c?.label}>
						<div className='card-body items-center'>
							{c?.icon}
							<h2 className='card-title lg:text-xl'>{c?.label}</h2>
							<p className='text-justify lg:text-lg'>{c?.description}</p>
						</div>
					</div>
				))}
			</div>
		</Section>
	)
}

export default WhyWeSection
