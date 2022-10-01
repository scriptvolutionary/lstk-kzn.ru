/* eslint-disable import/no-anonymous-default-export */
import { ForwardedRef, forwardRef } from 'react'

import { clsxMerge } from '@/lib/clsxMerge'

import UnstyledLink, { UnstyledLinkProps } from '@/components/links/UnstyledLink'

enum LinkVariants {
	primary,
	secondary,
	accent,
	info,
	warning,
	error,
	neutral
}

enum LinkIconDistance {
	min,
	max
}

enum LinkIconDirection {
	row,
	reverse
}

export type UnderlineLinkProps = {
	variant?: keyof typeof LinkVariants
	icon?: JSX.Element
	distance?: keyof typeof LinkIconDistance
	direction?: keyof typeof LinkIconDirection
} & UnstyledLinkProps

const UnderlineLink = forwardRef<HTMLAnchorElement, UnderlineLinkProps>(
	(
		{ children, className, variant, icon, distance = 'min', direction = 'row', ...rest }: UnderlineLinkProps,
		ref: ForwardedRef<HTMLAnchorElement>
	): JSX.Element => {
		return (
			<UnstyledLink
				className={clsxMerge(
					'underline-base inline-flex items-center pb-1',
					'text-justify text-base font-medium text-base-content',
					'border-b border-dotted border-base-content hover:border-base-content/0',
					'focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-base-content focus-visible:ring-offset-2',
					[
						variant === 'primary' && [
							'underline-primary-content border-primary-content text-primary-content',
							'hover:border-primary-content/0 focus-visible:ring-primary-content'
						],
						variant === 'secondary' && [
							'underline-secondary-content border-secondary-content text-secondary-content',
							'hover:border-secondary-content/0 focus-visible:ring-secondary-content'
						],
						variant === 'accent' && [
							'underline-accent-content border-accent-content text-accent-content',
							'hover:border-accent-content/0 focus-visible:ring-accent-content'
						],
						variant === 'info' && [
							'underline-info-content border-info-content text-info-content',
							'hover:border-info-content/0 focus-visible:ring-info-content'
						],
						variant === 'warning' && [
							'underline-warning-content border-warning-content text-warning-content',
							'hover:border-warning-content/0 focus-visible:ring-warning-content'
						],
						variant === 'error' && [
							'underline-error-content border-error-content text-error-content',
							'hover:border-error-content/0 focus-visible:ring-error-content'
						],
						variant === 'neutral' && [
							'underline-neutral-content border-neutral-content text-neutral-content',
							'hover:border-neutral-content/0 focus-visible:ring-neutral-content'
						]
					],
					[distance === 'min' && 'sm:gap-2 md:gap-4', distance === 'max' && 'justify-between'],
					[direction === 'row' && 'flex-row', direction === 'reverse' && 'flex-row-reverse'],
					'transition-all duration-200 ease-in',
					className
				)}
				ref={ref}
				{...rest}
			>
				{icon ? (
					<>
						{icon}
						<span>{children}</span>
					</>
				) : (
					children
				)}
			</UnstyledLink>
		)
	}
)

export default UnderlineLink
