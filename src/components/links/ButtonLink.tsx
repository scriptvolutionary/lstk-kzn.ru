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
	neutral,
	ghost,
	outline
}

enum LinkIconDistance {
	min,
	max
}

enum LinkIconDirection {
	row,
	reverse
}

enum LinkSize {
	max,
	wide,
	block
}

export type ButtonLinkProps = {
	variant?: keyof typeof LinkVariants
	icon?: JSX.Element
	distance?: keyof typeof LinkIconDistance
	direction?: keyof typeof LinkIconDirection
	size?: keyof typeof LinkSize
} & UnstyledLinkProps

const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
	(
		{ children, className, variant = 'neutral', icon, distance = 'min', direction = 'row', size = 'max', ...rest }: ButtonLinkProps,
		ref: ForwardedRef<HTMLAnchorElement>
	): JSX.Element => {
		return (
			<UnstyledLink
				className={clsxMerge(
					'inline-flex items-center',
					'text-justify text-base-content',
					'focus-visible:ring-primary-500 focus:outline-none focus-visible:ring',
					[
						variant === 'primary' && 'btn btn-primary text-primary-content',
						variant === 'secondary' && 'btn btn-secondary text-secondary-content',
						variant === 'accent' && 'btn btn-accent text-accent-content',
						variant === 'info' && 'btn btn-info text-info-content',
						variant === 'warning' && 'btn btn-warning text-warning-content',
						variant === 'error' && 'btn btn-error text-error-content',
						variant === 'neutral' && 'btn text-neutral-content',
						variant === 'outline' && 'btn btn-outline',
						variant === 'ghost' && 'btn btn-ghost'
					],
					[distance === 'min' && 'gap-4', distance === 'max' && 'justify-between'],
					[direction === 'row' && 'flex-row', direction === 'reverse' && 'flex-row-reverse'],
					[size === 'max' && 'w-max', size === 'wide' && 'btn-wide justify-between', size === 'block' && 'btn-block justify-between'],
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

export default ButtonLink