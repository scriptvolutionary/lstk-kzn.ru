import { ForwardedRef, forwardRef } from 'react'

import { clsxMerge } from '@/lib/clsxMerge'

import UnstyledLink, { UnstyledLinkProps } from '@/components/links/UnstyledLink'

const PrimaryLink = forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
	({ className, children, ...rest }: UnstyledLinkProps, ref: ForwardedRef<HTMLAnchorElement>): JSX.Element => {
		return (
			<UnstyledLink
				className={clsxMerge(
					'inline-flex items-center',
					'text-justify text-base font-medium text-primary hover:text-primary-focus',
					'focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-primary-content focus-visible:ring-offset-2',
					'transition-all duration-200 ease-in',
					className
				)}
				ref={ref}
				{...rest}
			>
				{children}
			</UnstyledLink>
		)
	}
)

export default PrimaryLink
