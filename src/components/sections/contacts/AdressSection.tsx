import Section from '@/components/Section'

const AdressSection = (): JSX.Element => {
	return (
		<Section label='Адрес'>
			<div className='inline-block h-96 w-full'>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d143543.23894010382!2d48.933221883232626!3d55.79561489265278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415ead2b7caccd99%3A0x7fcb77b9b5ad8c65!2z0JrQsNC30LDQvdGMLCDQoNC10YHQvy4g0KLQsNGC0LDRgNGB0YLQsNC9!5e0!3m2!1sru!2sru!4v1665312167497!5m2!1sru!2sru'
					className='h-full w-full'
					loading='lazy'
				></iframe>
			</div>
		</Section>
	)
}

export default AdressSection
