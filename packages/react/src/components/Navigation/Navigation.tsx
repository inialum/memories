import clsx from 'clsx'
import {
	type ComponentPropsWithRef,
	type MouseEvent,
	useCallback,
	useEffect,
	useRef,
} from 'react'
import { createPortal } from 'react-dom'
import { RemoveScroll } from 'react-remove-scroll'

import CrossIcon from '../../assets/cross_icon.svg?react'
import InialumLogoWhiteTransparent from '../../assets/inialum_logo_white_transparent.svg?react'
import XLogo from '../../assets/x_logo.svg?react'

type Props = NavigationContentProps & {
	portal?:
		| true
		| {
				rootElement: Element
		  }
}

export const Navigation = ({ portal = true, ...rest }: Props) => {
	if (portal) {
		const rootElement = portal === true ? document.body : portal.rootElement
		return createPortal(<NavigationContent {...rest} />, rootElement)
	}

	return <NavigationContent {...rest} />
}

type NavigationContentProps = ComponentPropsWithRef<'dialog'> & {
	isOpen: boolean
	onClose: () => void
}

const NavigationContent = ({
	isOpen,
	className,
	onClose: _onClose,
	...rest
}: NavigationContentProps) => {
	const nowYear = new Date().getFullYear()

	const dialogRef = useRef<HTMLDialogElement>(null)

	const onClose = useCallback(() => {
		const dialogElem = dialogRef.current
		if (!dialogElem) return
		dialogElem.close()
		_onClose()
	}, [_onClose])

	useEffect(() => {
		const dialogElem = dialogRef.current
		if (!dialogElem) return

		if (isOpen) {
			if (dialogElem.hasAttribute('open')) return
			dialogElem.showModal()
		} else {
			if (!dialogElem.hasAttribute('open')) return
			dialogElem.close()
		}
	}, [isOpen])

	const onClickContent = useCallback((e: MouseEvent<HTMLDivElement>) => {
		e.stopPropagation()
	}, [])

	return (
		<RemoveScroll removeScrollBar enabled={isOpen}>
			{/** biome-ignore lint/a11y/useKeyWithClickEvents: Due to the dialog element handling keyboard interactions internally */}
			<dialog
				{...rest}
				ref={dialogRef}
				onClick={onClose}
				className={clsx(
					'bg-blue-600 text-base-white',
					'm-0 p-0 max-w-full max-h-full h-svh left-full -translate-x-full sm:w-372 w-full',
					className,
				)}
				style={{ transition: 'opacity .5s' }}
			>
				{/* Close Button */}
				<button
					type="button"
					className="absolute top-20 right-20 p-4 fill-base-white"
					aria-label="閉じる"
					onClick={onClose}
				>
					<CrossIcon width="24" height="24" aria-hidden="true" />
				</button>

				{/* Content */}
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: Handle unintentional click with this handler */}
				{/** biome-ignore lint/a11y/noStaticElementInteractions: Handle unintentional click with this handler */}
				<div className="w-full h-full" onClick={onClickContent}>
					{/* Logo - Mobile Only */}
					<div className="object-cover h-160 w-160 p-12 sm:hidden">
						<InialumLogoWhiteTransparent aria-label="INIALUM - INIAD Alumni Meetings" />
					</div>

					{/* Navigation */}
					<nav>
						<ul className="flex flex-col justify-center gap-y-32 px-36 py-32 sm:mt-160">
							<li className="font-bold text-12">
								<a href="/">ホーム</a>
							</li>
							<li className="font-bold text-12">
								<a href="/vision">私たちの思い</a>
							</li>
							<li className="font-bold text-12">
								<a href="https://inialum.org/join">入会する</a>
							</li>
							<li className="font-bold text-12">
								<a href="/contact">お問い合わせ</a>
							</li>
							<li className="font-bold text-12">
								<a
									href="https://inialum.notion.site/INIALUM-Q-A-0cfb2bd4cc814df6a29ca5aa7f9ad9b7"
									target="_blank"
									rel="noreferrer noopener"
								>
									Q&A
								</a>
							</li>
						</ul>
					</nav>

					{/* Bottom Section */}
					<div className="flex flex-col justify-center border-t border-t-gray-300 gap-y-24 pt-24 mx-36 pb-80 sm:w-300">
						{/* Social Media */}
						<a
							href="https://twitter.com/inialum"
							target="_blank"
							rel="noreferrer noopener"
							className="flex items-center w-fit"
						>
							<XLogo
								aria-label="X公式アカウント"
								className="h-24 fill-base-white"
							/>
						</a>

						{/* Links */}
						<div className="flex items-center gap-x-20 text-gray-300 text-8">
							<a
								href="https://inialum.notion.site/4cbf67b190544bff8891deabc64e776c"
								target="_blank"
								rel="noreferrer noopener"
							>
								同窓会会則
							</a>
							<a
								href="https://inialum.notion.site/4d2374f79b594f00b93c0efccf3c6bb4"
								target="_blank"
								rel="noreferrer noopener"
							>
								役員一覧
							</a>
							<a
								href="https://inialum.notion.site/d8a7e0dd14224c0dadfd630a6665cee0"
								target="_blank"
								rel="noreferrer noopener"
							>
								プライバシーポリシー
							</a>
							<a
								href="https://github.com/inialum"
								target="_blank"
								rel="noreferrer noopener"
							>
								GitHub
							</a>
						</div>

						{/* Copyright */}
						<div className="text-8 text-gray-300">
							&copy; {nowYear} INIALUM - INIAD Alumni Meetings.
						</div>
					</div>
				</div>
			</dialog>
		</RemoveScroll>
	)
}
