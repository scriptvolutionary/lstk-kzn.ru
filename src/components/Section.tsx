import { ReactNode } from 'react'

import { clsxMerge } from '@/lib/clsxMerge'

type SectionProps = {
	className?: string
	label: string
	labelClassName?: string
	children: ReactNode
	id?: string
}

export default function Section({ className, label, labelClassName, children, id }: SectionProps): JSX.Element {
	return (
		<section className={clsxMerge('block h-full w-screen bg-base-100 py-24 text-base-content lg:py-32', className)} id={id}>
			<div className='container mx-auto'>
				<div className='flex flex-col gap-16'>
					{label && <h2 className={clsxMerge('text-3xl font-bold', labelClassName)}>{label}</h2>}
					{children}
				</div>
			</div>
		</section>
	)
}
