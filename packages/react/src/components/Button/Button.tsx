import clsx from 'clsx'
import type { ComponentPropsWithRef } from 'react'

type Props = ComponentPropsWithRef<'button'> & {
	colorTheme?: 'primary' | 'secondary' | 'white'
	size?: 'small' | 'medium' | 'large' | 'fullWidth'
	styleType?: 'filled' | 'outlined'
	radius?: 'none' | 'rounded' | 'moreRounded'
}

export const Button = ({
	colorTheme = 'primary',
	size = 'medium',
	styleType = 'filled',
	radius = 'none',
	disabled,
	className,
	children,
	...rest
}: Props) => {
	return (
		<button
			{...rest}
			disabled={disabled}
			className={clsx(
				// Base styles
				'inline-flex items-center justify-center cursor-pointer',
				// Variant styles
				styleType === 'filled' && [
					'text-base-white border',
					!disabled && [
						colorTheme === 'primary' && 'bg-blue-400 border-blue-400',
						colorTheme === 'white' &&
							'bg-base-white border-base-white text-primary',
					],
				],
				styleType === 'outlined' && [
					'box-border border-2 bg-transparent',
					!disabled && [
						colorTheme === 'primary' && 'border-blue-400 text-blue-400',
						colorTheme === 'white' && 'border-base-white text-base-white',
					],
				],
				// Size styles
				size === 'small' && 'text-base py-8 px-24',
				size === 'medium' && 'text-lg py-12 px-32',
				size === 'large' && 'text-xl py-16 px-40',
				size === 'fullWidth' && 'w-full text-lg py-12 px-32',
				// Radius styles
				radius === 'rounded' && 'rounded',
				radius === 'moreRounded' && 'rounded-4xl',
				// Disabled state
				disabled && [
					'cursor-not-allowed',
					styleType === 'filled' && 'bg-gray-300 border-gray-300',
					styleType === 'outlined' && 'border-gray-300 text-gray-300',
				],
				className,
			)}
		>
			{children}
		</button>
	)
}
