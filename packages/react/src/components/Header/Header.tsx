import clsx from 'clsx'
import { type ComponentPropsWithRef, useCallback, useState } from 'react'

import InialumLogoLightTransparent from '../../assets/inialum_logo_light_transparent.svg?react'
import MenuIcon from '../../assets/menu_icon.svg?react'
import { Navigation } from '../Navigation'

type Props = ComponentPropsWithRef<'header'> & {
	hasNavigation?: boolean
}

export const Header = ({ hasNavigation = true, className, ...rest }: Props) => {
	const [isOpen, setIsOpen] = useState(false)
	const onClick = useCallback(() => {
		setIsOpen(!isOpen)
	}, [isOpen])

	return (
		<header
			{...rest}
			className={clsx(
				'relative flex items-center',
				'bg-primary w-full h-60',
				className,
			)}
		>
			<div className="absolute top-0 left-0 flex items-center justify-center w-160 h-160 md:w-xs md:h-320 p-12 md:p-24 bg-base-white z-30">
				<InialumLogoLightTransparent aria-label="INIALUM - INIAD Alumni Meetings" />
			</div>

			{hasNavigation && (
				<>
					<button
						type="button"
						className="ml-auto mr-20 p-4 fill-base-white"
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
