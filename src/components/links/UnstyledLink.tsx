import Link, { LinkProps } from 'next/link'
import { ComponentPropsWithRef, ForwardedRef, forwardRef, ReactNode } from 'react'

import { clsxMerge } from '@/lib/clsxMerge'

export type UnstyledLinkProps = {
	href: string
	children: ReactNode
	newTab?: boolean
	className?: string
	linkProps?: Omit<LinkProps, 'href'>
} & ComponentPropsWithRef<'a'>

const UnstyledLink = forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
	({ children, href = '/', newTab, className, linkProps, ...rest }: UnstyledLinkProps, ref: ForwardedRef<HTMLAnchorElement>): JSX.Element => {
		const isNewTab: boolean | '' = newTab !== undefined ? newTab : href && !href.startsWith('/') && !href.startsWith('#')

		if (!isNewTab) {
			return (
				<Link href={href} {...linkProps}>
					<a className={className} ref={ref} {...rest}>
						{children}
					</a>
				</Link>
			)
		}

		return (
			<a className={clsxMerge('cursor-alias', className)} ref={ref} target='_blank' rel='noopener noreferrer' href={href} {...rest}>
				{children}
			</a>
		)
	}
)

export default UnstyledLink
