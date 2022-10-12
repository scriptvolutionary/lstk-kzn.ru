import { ReactNode } from 'react'

import Aside from '@/components/layout/Aside'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

import FreeSupportButton from './../buttons/FreeSupportButton'
import Seo from './Seo'

type ContainerProps = {
	children: ReactNode
	title?: string
}

export default function Container({ children, title }: ContainerProps): JSX.Element {
	return (
		<>
			<Seo templateTitle={title && title} />
			<div className='drawer drawer-end'>
				<input className='drawer-toggle' id='container' type='checkbox' />
				<div className='drawer-content overflow-x-hidden'>
					<Header />
					{children}
					<FreeSupportButton />
					<Footer />
				</div>
				<Aside />
			</div>
		</>
	)
}
