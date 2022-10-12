import { FaPhone } from 'react-icons/fa'

import ButtonLink from '@/components/links/ButtonLink'

export default function FreeSupportButton(): JSX.Element {
	return (
		<div className='fixed bottom-8 right-8 z-40'>
			<ButtonLink className='relative' href='tel:+7 960 037-53-68' variant='primary' newTab={false}>
				<FaPhone />
			</ButtonLink>
		</div>
	)
}
