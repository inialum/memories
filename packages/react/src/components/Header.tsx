import clsx from 'clsx'
import { useCallback, useState, type ComponentPropsWithRef } from 'react'

import InialumLogoLightTransparent from '@/assets/inialum_logo_light_transparent.svg?react'
import MenuIcon from '@/assets/menu_icon.svg?react'
import { Navigation } from '@/components/Navigation'

type Props = ComponentPropsWithRef<'header'> & {
  hasNavigation?: boolean
}

export const Header = ({ hasNavigation = true, className, ...rest }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const onClick = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  return (
    <header {...rest} className={clsx(className, 'Header')}>
      <div className="Header__Logo--large">
        <InialumLogoLightTransparent />
      </div>

      {hasNavigation && (
        <>
          <button
            className="Header__Navigation--button"
            aria-label="ナビゲーションメニューを開く"
            onClick={onClick}
          >
            <MenuIcon />
          </button>
          <Navigation isOpen={isOpen} onClose={onClick} />
        </>
      )}
    </header>
  )
}
