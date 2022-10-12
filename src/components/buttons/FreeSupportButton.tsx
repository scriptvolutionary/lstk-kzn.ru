import { FaPhone } from 'react-icons/fa'

import ButtonLink from '@/components/links/ButtonLink'

export default function FreeSupportButton(): JSX.Element {
	return (
		<div className='fixed bottom-4 right-4 z-40 lg:bottom-8 lg:right-8'>
			<ButtonLink className='relative' href='tel:+7 960 037-53-68' variant='primary' newTab={false}>
				<FaPhone />
			</ButtonLink>
		</div>
	)
}
