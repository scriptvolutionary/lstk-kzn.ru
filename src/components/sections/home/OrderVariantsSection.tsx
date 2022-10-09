import Section from '@/components/Section'

const orderVariants = [
	{ label: '№1', description: 'ЛСТК Комплект' },
	{ label: '№2', description: 'ЛСТК Комплект +' },
	{ label: '№3', description: 'Монтаж каркаса & закрытый внешний контур' },
	{ label: '№4', description: 'Закрытый внешний контур с отделкой фасада' },
	{ label: '№5', description: 'Закрытый внешний контур с чистовой отделкой' }
]

const OrderVariantsSection = (): JSX.Element => {
	return (
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
	)
}

export default OrderVariantsSection
