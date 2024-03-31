import clsx from 'clsx'

export enum ButtonSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export type ButtonProps = {
  colorTheme?: 'primary' | 'secondary' | 'white'
  size?: 'small' | 'medium' | 'large' | 'full-width'
  styleType?: 'filled' | 'outlined'
  radius?: 'none' | 'rounded' | 'more-rounded'
  disabled?: boolean
  label?: string
  onClick: () => void
}

export const createButton = ({
  colorTheme = 'primary',
  size = 'medium',
  styleType = 'filled',
  radius = 'none',
  disabled = false,
  label = '',
  onClick,
}: ButtonProps) => {
  const btn = document.createElement('button')
  btn.type = 'button'
  btn.innerText = label
  btn.addEventListener('click', onClick)

  btn.className = clsx(
    'Button',
    colorTheme === 'primary' && 'Button--primary',
    colorTheme === 'secondary' && 'Button--secondary',
    colorTheme === 'white' && 'Button--white',
    size === 'small' && 'Button--small',
    size === 'medium' && 'Button--medium',
    size === 'large' && 'Button--large',
    size === 'full-width' && 'Button--full-width',
    styleType === 'filled' && 'Button--filled',
    styleType === 'outlined' && 'Button--outlined',
    radius === 'rounded' && 'Button--rounded',
    radius === 'more-rounded' && 'Button--more-rounded',
    disabled && 'Button--disabled',
  )

  return btn
}
