import Container from '@/components/layout/Container'

export default function Error() {
	return (
		<Container title='Страница не найдена'>
			<main>
				<section className='block h-screen w-screen bg-base-100 text-base-content'>
					<div className='container mx-auto'>
						<div className='flex items-center justify-center'>
							<h2>Страница не существует или еще не создана...</h2>
						</div>
					</div>
				</section>
			</main>
		</Container>
	)
}

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404

	return { statusCode }
}
