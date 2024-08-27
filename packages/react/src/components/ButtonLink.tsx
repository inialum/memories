import clsx from 'clsx'
import type { ComponentPropsWithRef } from 'react'

type Props = ComponentPropsWithRef<'a'> & {
  colorTheme?: 'primary' | 'secondary' | 'white'
  size?: 'small' | 'medium' | 'large' | 'fullWidth'
  styleType?: 'filled' | 'outlined'
  radius?: 'none' | 'rounded' | 'moreRounded'
  disabled?: boolean
}

export const ButtonLink = ({
  colorTheme = 'primary',
  size = 'medium',
  styleType = 'filled',
  radius = 'none',
  rel: _rel,
  className,
  children,
  ...rest
}: Props) => {
  let rel = _rel
  if (rest.target === '_blank' && typeof rel === 'undefined') {
    rel = 'noopener'
  }
  return (
    <a
      {...rest}
      rel={rel}
      className={clsx(
        className,
        'ButtonLink',
        colorTheme === 'primary' && 'ButtonLink--primary',
        colorTheme === 'secondary' && 'ButtonLink--secondary',
        colorTheme === 'white' && 'ButtonLink--white',
        size === 'small' && 'ButtonLink--small',
        size === 'medium' && 'ButtonLink--medium',
        size === 'large' && 'ButtonLink--large',
        size === 'fullWidth' && 'ButtonLink--full-width',
        styleType === 'filled' && 'ButtonLink--filled',
        styleType === 'outlined' && 'ButtonLink--outlined',
        radius === 'rounded' && 'ButtonLink--rounded',
        radius === 'moreRounded' && 'ButtonLink--more-rounded',
        rest.disabled && 'ButtonLink--disabled',
      )}
    >
      {children}
    </a>
  )
}
