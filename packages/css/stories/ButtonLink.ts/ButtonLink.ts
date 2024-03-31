import clsx from 'clsx'

export type ButtonLinkProps = HTMLAnchorElement & {
  colorTheme?: 'primary' | 'secondary' | 'white'
  size?: 'small' | 'medium' | 'large' | 'full-width'
  styleType?: 'filled' | 'outlined'
  radius?: 'none' | 'rounded' | 'more-rounded'
  disabled?: boolean
  label?: string
}

export const createButtonLink = ({
  colorTheme = 'primary',
  size = 'medium',
  styleType = 'filled',
  radius = 'none',
  disabled = false,
  label = '',
  ...rest
}: ButtonLinkProps) => {
  const btnLink = document.createElement('a')
  btnLink.innerText = label
  if (rest.target === '_blank' && typeof rest.rel === 'undefined') {
    btnLink.rel = 'noopener noreferrer'
  }

  btnLink.className = clsx(
    'ButtonLink',
    colorTheme === 'primary' && 'ButtonLink--primary',
    colorTheme === 'secondary' && 'ButtonLink--secondary',
    colorTheme === 'white' && 'ButtonLink--white',
    size === 'small' && 'ButtonLink--small',
    size === 'medium' && 'ButtonLink--medium',
    size === 'large' && 'ButtonLink--large',
    size === 'full-width' && 'ButtonLink--full-width',
    styleType === 'filled' && 'ButtonLink--filled',
    styleType === 'outlined' && 'ButtonLink--outlined',
    radius === 'rounded' && 'ButtonLink--rounded',
    radius === 'more-rounded' && 'ButtonLink--more-rounded',
    disabled && 'ButtonLink--disabled',
  )

  return btnLink
}
