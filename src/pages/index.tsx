import { FaUser } from 'react-icons/fa'

import Container from '@/components/layout/Container'
import UnderlineModal from '@/components/modals/UnderlineModal'
export default function IndexPage(): JSX.Element {
	return (
		<Container>
			<main className='flex flex-col overflow-x-hidden scroll-smooth'>
				<section>
					<UnderlineModal modalKey='/' icon={<FaUser />}>
						asd
					</UnderlineModal>
				</section>
			</main>
		</Container>
	)
}
