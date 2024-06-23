import clsx from 'clsx'
import { type ComponentPropsWithRef } from 'react'

import InialumLogoLightTransparent from '@/assets/inialum_logo_light_transparent.svg?react'
import XLogo from '@/assets/x_logo.svg?react'

type Props = ComponentPropsWithRef<'footer'>

export const Footer = ({ className, ...rest }: Props) => {
  const nowYear = new Date().getFullYear()

  return (
    <footer {...rest} className={clsx(className, 'Footer')}>
      <div className="Footer__Head">
        <div className="Footer__Logo">
          <InialumLogoLightTransparent aria-label="INIALUM - INIAD Alumni Meetings" />
        </div>
        <div className="Footer__Copy">さらなる連携を、ともに歩んだ仲間と</div>
      </div>
      <nav>
        <ul className="Footer__NavList">
          <li className="Footer__Item">
            <a href="/">ホーム</a>
          </li>
          <li className="Footer__Item">
            <a href="/vision">私たちの思い</a>
          </li>
          <li className="Footer__Item">
            <a href="https://inialum.org/join">入会する</a>
          </li>
        </ul>
      </nav>
      <div className="Footer__Bottom">
        <div className="Footer__Item--top">
          <a
            href="https://twitter.com/inialum"
            target="_blank"
            rel="noopener noreferrer"
          >
            <XLogo
              aria-label="X公式アカウント"
              className="Footer__Item--XLogo"
            />
          </a>
        </div>
        <div className="Footer__Item--small">
          <a
            href="https://inialum.notion.site/4cbf67b190544bff8891deabc64e776c"
            target="_blank"
            rel="noopener"
          >
            同窓会会則
          </a>
          <a
            href="https://inialum.notion.site/4d2374f79b594f00b93c0efccf3c6bb4"
            target="_blank"
            rel="noopener"
          >
            役員一覧
          </a>
          <a
            href="https://inialum.notion.site/d8a7e0dd14224c0dadfd630a6665cee0"
            target="_blank"
            rel="noopener"
          >
            プライバシーポリシー
          </a>
          <a href="https://github.com/inialum" target="_blank" rel="noopener">
            GitHub
          </a>
        </div>
        <div className="Footer__Item--small">
          &copy; {nowYear} INIALUM - INIAD Alumni Meetings.
        </div>
      </div>
    </footer>
  )
}
