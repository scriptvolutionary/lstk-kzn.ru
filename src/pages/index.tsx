import { IoPricetag, IoShieldCheckmark, IoTrendingUp } from 'react-icons/io5'

import FreeSupportButton from '@/components/buttons/FreeSupportButton'
import Hero from '@/components/Hero'
import Img from '@/components/Img'
import Container from '@/components/layout/Container'

export default function IndexPage(): JSX.Element {
	return (
		<Container>
			<main>
				<Hero image='/background.png' label='СК-ЛСТК Гарант' content='С вниманием к клиенту, с любовью к технологиям!' />
				<section className='block h-full w-screen bg-base-100 py-32 text-base-content' id='show'>
					<div className='container mx-auto'>
						<div className='flex flex-col gap-16'>
							<h2 className='text-3xl font-bold'>О нас</h2>
							<div className='flex flex-col gap-8'>
								<div className='card border bg-base-100'>
									<div className='card-body'>
										<h2 className='card-title lg:text-xl'>Рынок</h2>
										<p className='text-justify lg:text-lg'>
											Наша команда, более 20 лет занимается строительством домов и разного вида сооружений. За годы работы, мы пришли к
											выводу, что оптимальным решением качества, цены и быстроты возведения объектов, является строительство из профиля
											ЛСТК. Во времена нестабильных цен, бизнесу и частному сектору необходимо построить и начать эксплуатацию нового
											здания в кратчайшие сроки и минимальными издержками.
										</p>
									</div>
								</div>
								<div className='card border bg-base-100'>
									<div className='card-body'>
										<h2 className='card-title lg:text-xl'>Команда</h2>
										<p className='text-justify lg:text-lg'>
											Опытные менеджеры нашей компании, инженеры, конструкторы и проектирвощики завода способны выполнить самые сложные
											задачи в кратчайшие сроки по возведению сооружений с использованием профиля из ЛСТК
										</p>
									</div>
								</div>
								<div className='card border bg-base-100'>
									<div className='card-body'>
										<h2 className='card-title lg:text-xl'>Производство</h2>
										<p className='text-justify lg:text-lg'>
											За эти годы были введены в эксплуатацию более 2,5 тысяч объектов. Завод занимает лидирующие позиции по выпуску
											профилей ЛСТК. МОщность производства ЛСТК равна более 300 000 м2 жилья ежегодно, при необходимости, за несколько
											месяцев, можно увеличить производительность до 1 000 000 м2!
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='block h-full w-screen bg-base-100 pb-32 text-base-content' id='show'>
					<div className='container mx-auto'>
						<div className='flex flex-col gap-16'>
							<h2 className='text-center text-3xl font-bold'>Почему мы?</h2>
							<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
								<div className='card border bg-base-100'>
									<div className='card-body items-center'>
										<IoShieldCheckmark className='h-56 w-32 text-primary' />
										<h2 className='card-title lg:text-xl'>Надежность</h2>
										<p className='text-justify lg:text-lg'>По оценкам специалистов каркас ЛСТК прослужит вам не менее 100 лет.</p>
									</div>
								</div>
								<div className='card border bg-base-100'>
									<div className='card-body items-center'>
										<IoTrendingUp className='h-56 w-32 text-primary' />
										<h2 className='card-title lg:text-xl'>Сроки</h2>
										<p className='text-justify lg:text-lg'>Средний срок возведения конструкции здания площадью 100м² составляет 7 дней.</p>
									</div>
								</div>
								<div className='card border bg-base-100'>
									<div className='card-body items-center'>
										<IoPricetag className='h-56 w-32 text-primary' />
										<h2 className='card-title lg:text-xl'>Цена</h2>
										<p className='text-justify lg:text-lg'>Сделаем предварительную 3D-модель и назовем цену в течение трех дней.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='block h-full w-screen bg-base-100 pb-32 text-base-content' id='show'>
					<div className='container mx-auto'>
						<div className='flex flex-col gap-16'>
							<h2 className='text-center text-3xl font-bold'>Варианты заказов и комплектации</h2>
							<div className='flex flex-wrap items-center justify-center gap-8'>
								<div className='card w-full border bg-base-100 lg:w-1/3'>
									<div className='card-body items-center'>
										<h2 className='card-title lg:text-xl'>№1</h2>
										<p className='text-justify lg:text-lg'>ЛСТК Комплект</p>
									</div>
								</div>
								<div className='card w-full border bg-base-100 lg:w-1/3'>
									<div className='card-body items-center'>
										<h2 className='card-title lg:text-xl'>№2</h2>
										<p className='text-justify lg:text-lg'>ЛСТК Комплект +</p>
									</div>
								</div>
								<div className='card w-full border bg-base-100 lg:w-1/3'>
									<div className='card-body items-center'>
										<h2 className='card-title lg:text-xl'>№3</h2>
										<p className='text-justify lg:text-lg'>Монтаж каркаса & закрытый внешний контур</p>
									</div>
								</div>
								<div className='card w-full border bg-base-100 lg:w-1/3'>
									<div className='card-body items-center'>
										<h2 className='card-title lg:text-xl'>№4</h2>
										<p className='text-justify lg:text-lg'>Закрытый внешний контур с отделкой фасада</p>
									</div>
								</div>
								<div className='card w-full border bg-base-100 lg:w-1/3'>
									<div className='card-body items-center'>
										<h2 className='card-title lg:text-xl'>№5</h2>
										<p className='text-justify lg:text-lg'>Закрытый внешний контур с чисторвой отделкой</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='block h-full w-screen bg-base-100 pb-32 text-base-content' id='show'>
					<div className='container mx-auto'>
						<div className='flex flex-col gap-16'>
							<h2 className='text-center text-3xl font-bold'>Патнеры компании</h2>
							<div className='flex items-center justify-around gap-8'>
								<Img className='h-22 w-64' width={360} height={100} src='/emblem.png' alt='Партнер' />
								<Img className='h-22 w-64' width={360} height={100} src='/emblem.png' alt='Партнер' />
								<Img className='h-22 w-64' width={360} height={100} src='/emblem.png' alt='Партнер' />
							</div>
						</div>
					</div>
				</section>
				<FreeSupportButton />
			</main>
		</Container>
	)
}
