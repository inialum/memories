import clsx from 'clsx'
import { type ComponentPropsWithRef } from 'react'

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
  className,
  children,
  ...rest
}: Props) => {
  return (
    <button
      {...rest}
      className={clsx(
        className,
        'Button',
        colorTheme === 'primary' && 'Button--primary',
        colorTheme === 'secondary' && 'Button--secondary',
        colorTheme === 'white' && 'Button--white',
        size === 'small' && 'Button--small',
        size === 'medium' && 'Button--medium',
        size === 'large' && 'Button--large',
        size === 'fullWidth' && 'Button--full-width',
        styleType === 'filled' && 'Button--filled',
        styleType === 'outlined' && 'Button--outlined',
        radius === 'rounded' && 'Button--rounded',
        radius === 'moreRounded' && 'Button--more-rounded',
        rest.disabled && 'Button--disabled',
      )}
    >
      {children}
    </button>
  )
}
