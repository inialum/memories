import clsx from 'clsx'
import { type ComponentPropsWithRef, useCallback, useState } from 'react'

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
				<InialumLogoLightTransparent aria-label="INIALUM - INIAD Alumni Meetings" />
			</div>

			{hasNavigation && (
				<>
					<button
						type="button"
						className="Header__Navigation--button"
						title="ナビゲーションメニュー"
						aria-label="ナビゲーションメニューを開く"
						aria-haspopup="true"
						aria-expanded={isOpen}
						onClick={onClick}
					>
						<MenuIcon aria-hidden="true" />
					</button>
					{isOpen && <Navigation isOpen={isOpen} onClose={onClick} />}
				</>
			)}
		</header>
	)
}
