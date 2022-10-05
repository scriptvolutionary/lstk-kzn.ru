import Hero from '@/components/Hero'
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
										<h2 className='card-title text-xl'>Рынок</h2>
										<p className='text-justify text-lg'>
											Наша команда, более 20 лет занимается строительством домов и разного вида сооружений. За годы работы, мы пришли к
											выводу, что оптимальным решением качества, цены и быстроты возведения объектов, является строительство из профиля
											ЛСТК. Во времена нестабильных цен, бизнесу и частному сектору необходимо построить и начать эксплуатацию нового
											здания в кратчайшие сроки и минимальными издержками.
										</p>
									</div>
								</div>
								<div className='card border bg-base-100'>
									<div className='card-body'>
										<h2 className='card-title text-xl'>Команда</h2>
										<p className='text-justify text-lg'>
											Опытные менеджеры нашей компании, инженеры, конструкторы и проектирвощики завода способны выполнить самые сложные
											задачи в кратчайшие сроки по возведению сооружений с использованием профиля из ЛСТК
										</p>
									</div>
								</div>
								<div className='card border bg-base-100'>
									<div className='card-body'>
										<h2 className='card-title text-xl'>Производство</h2>
										<p className='text-justify text-lg'>
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
			</main>
		</Container>
	)
}
