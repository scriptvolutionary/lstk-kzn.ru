/* eslint-disable react/no-unescaped-entities */
import { IoPricetag, IoShieldCheckmark, IoTrendingUp } from 'react-icons/io5'

import FreeSupportButton from '@/components/buttons/FreeSupportButton'
import Hero from '@/components/Hero'
import Img from '@/components/Img'
import Container from '@/components/layout/Container'
import Section from '@/components/Section'

const aboutCards = [
	{
		label: 'Рынок',
		description:
			'Наша команда, более 20 лет занимается строительством домов и разного вида сооружений. За годы работы, мы пришли к выводу, что оптимальным решением качества, цены и быстроты возведения объектов, является строительство из профиля ЛСТК. Во времена	нестабильных цен, бизнесу и частному сектору необходимо построить и начать эксплуатацию нового здания в кратчайшие сроки и минимальными издержками'
	},
	{
		label: 'Команда',
		description:
			'Опытные менеджеры нашей компании, инженеры, конструкторы и проектирвощики завода способны выполнить самые сложные задачи в	кратчайшие сроки по возведению сооружений с использованием профиля из ЛСТК'
	},
	{
		label: 'Производство',
		description:
			'За эти годы были введены в эксплуатацию миллионы квадратных метров зданий различного значения. Завод занимает лидирующие позиции по выпуску профилей ЛСТК. Наша общая команда реализует полный цикл строительных услуг - от проектирования и производства конструкций до монтажа объектов под "ключ".'
	}
]

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

const orderVariants = [
	{ label: '№1', description: 'ЛСТК Комплект' },
	{ label: '№2', description: 'ЛСТК Комплект +' },
	{ label: '№3', description: 'Монтаж каркаса & закрытый внешний контур' },
	{ label: '№4', description: 'Закрытый внешний контур с отделкой фасада' },
	{ label: '№5', description: 'Закрытый внешний контур с чистовой отделкой' }
]

export default function IndexPage(): JSX.Element {
	return (
		<Container>
			<main>
				<Hero image='/background.png' label='СК-ЛСТК Гарант' content='С вниманием к клиенту, с любовью к технологиям!' />
				<Section label='О нас' id='show'>
					<div className='flex flex-col gap-8'>
						{aboutCards?.map(c => (
							<div className='card border bg-base-100' key={c?.label}>
								<div className='card-body'>
									<h2 className='card-title lg:text-xl'>{c?.label}</h2>
									<p className='text-justify lg:text-lg'>{c?.description}</p>
								</div>
							</div>
						))}
					</div>
				</Section>
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
				<Section label='Варианты заказов и комплектации' labelClassName='text-center'>
					<div className='flex flex-wrap items-center justify-center gap-8'>
						{orderVariants?.map(v => (
							<div className='card w-full border bg-base-100 lg:w-1/3' key={v?.label}>
								<div className='card-body items-center'>
									<h2 className='card-title lg:text-xl'>{v?.label}</h2>
									<p className='text-justify lg:text-lg'>{v?.description}</p>
								</div>
							</div>
						))}
					</div>
				</Section>
				<Section label='Наши партнеры' labelClassName='text-center'>
					<div className='flex flex-col items-center justify-around gap-8 md:flex-row'>
						<Img className='lg:h-22 w-52 lg:w-64' width={360} height={100} src='/partners/timesteel.png' alt='Time Steel' />
						<Img className='lg:h-22 w-52 lg:w-64' width={360} height={100} src='/partners/rosselhoz.jpg' alt='Россельхоз Банк' />
						<Img className='lg:h-22 w-52 lg:w-64' width={360} height={100} src='/partners/sberbank.svg' alt='Сбер Банк' />
					</div>
				</Section>
				<FreeSupportButton />
			</main>
		</Container>
	)
}
