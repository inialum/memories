import clsx from 'clsx'
import type { ComponentPropsWithRef } from 'react'

import InialumLogoLightTransparent from '../../assets/inialum_logo_light_transparent.svg?react'
import XLogo from '../../assets/x_logo.svg?react'

type Props = ComponentPropsWithRef<'footer'>

export const Footer = ({ className, ...rest }: Props) => {
	const nowYear = new Date().getFullYear()

	return (
		<footer
			{...rest}
			className={clsx('bg-base-block', 'pt-52 px-48 pb-28 md:pb-64', className)}
		>
			{/* Header Section */}
			<div className="flex flex-col items-center justify-center gap-y-12 md:gap-y-16">
				<div className="w-120 h-120 md:w-280 md:h-280">
					<InialumLogoLightTransparent
						aria-label="INIALUM - INIAD Alumni Meetings"
						className="object-cover w-full h-full"
					/>
				</div>
				<div className="font-bold text-8 md:text-13">
					さらなる連携を、ともに歩んだ仲間と
				</div>
			</div>

			{/* Navigation Section */}
			<nav>
				<ul className="flex flex-col items-center text-center gap-y-32 md:gap-y-48 pt-40 md:py-56 pb-28">
					<li className="font-bold text-12 md:text-base">
						<a href="/">ホーム</a>
					</li>
					<li className="font-bold text-12 md:text-base">
						<a href="/vision">私たちの思い</a>
					</li>
					<li className="font-bold text-12 md:text-base">
						<a href="https://inialum.org/join">入会する</a>
					</li>
					<li className="font-bold text-12 md:text-base">
						<a href="/contact">お問い合わせ</a>
					</li>
					<li className="font-bold text-12 md:text-base">
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
			<div className="flex flex-col items-center text-center border-t border-t-gray-500 max-w-732 mx-auto gap-y-16 md:gap-y-36 pt-28 md:pt-56">
				{/* Social Media */}
				<div className="flex items-center justify-center pt-0 px-0 pb-12 md:pb-8">
					<a
						href="https://twitter.com/inialum"
						target="_blank"
						rel="noreferrer noopener"
					>
						<XLogo
							aria-label="X公式アカウント"
							className="h-24 md:h-32 fill-black"
						/>
					</a>
				</div>

				{/* Links */}
				<div className="flex items-center justify-center text-gray-500 gap-x-20 md:gap-x-48 text-8 md:text-14">
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
				<div className="text-gray-500 text-8 md:text-14">
					&copy; {nowYear} INIALUM - INIAD Alumni Meetings.
				</div>
			</div>
		</footer>
	)
}
