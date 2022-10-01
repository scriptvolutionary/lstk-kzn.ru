import { ReactNode } from 'react'

import { clsxMerge } from '@/lib/clsxMerge'

export type UnstyledModalProps = {
	children: ReactNode
	className?: string
	modalKey?: string
}

const UnstyledModal = ({ children, className, modalKey, ...rest }: UnstyledModalProps): JSX.Element => {
	return (
		<label className={clsxMerge('cursor-pointer', className)} htmlFor={modalKey} {...rest}>
			{children}
		</label>
	)
}

export default UnstyledModal
