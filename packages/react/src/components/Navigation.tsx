import clsx from 'clsx'
import {
  useCallback,
  useEffect,
  useRef,
  type ComponentPropsWithRef,
  type MouseEvent,
} from 'react'
import { RemoveScroll } from 'react-remove-scroll'

import CrossIcon from '@/assets/cross_icon.svg?react'
import InialumLogoWhiteTransparent from '@/assets/inialum_logo_white_transparent.svg?react'
import XLogo from '@/assets/x_logo.svg?react'

type Props = ComponentPropsWithRef<'dialog'> & {
  isOpen: boolean
  onClose: () => void
}

export const Navigation = ({
  isOpen = false,
  className,
  onClose,
  ...rest
}: Props) => {
  const nowYear = new Date().getFullYear()

  const dialogRef = useRef<HTMLDialogElement>(null)

  const _onClose = useCallback(() => {
    const dialogElem = dialogRef.current
    if (!dialogElem) return
    dialogElem.close()
    onClose()
  }, [onClose])

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
      <dialog
        {...rest}
        ref={dialogRef}
        onClick={_onClose}
        className={clsx(className, 'Navigation')}
      >
        <button
          className="Navigation__CloseButton"
          aria-label="閉じる"
          onClick={_onClose}
        >
          <CrossIcon width="24" height="24" aria-label="閉じる" />
        </button>
        <div className="Navigation__Content" onClick={onClickContent}>
          <div className="Navigation__Logo--mobile">
            <InialumLogoWhiteTransparent aria-label="INIALUM - INIAD Alumni Meetings" />
          </div>
          <nav>
            <ul className="Navigation__Content--main">
              <li className="Navigation__Item">
                <a href="/">ホーム</a>
              </li>
              <li className="Navigation__Item">
                <a href="/vision">私たちの思い</a>
              </li>
              <li className="Navigation__Item">
                <a href="https://inialum.org/join">入会する</a>
              </li>
              <li className="Navigation__Item">
                <a
                  href="https://inialum.notion.site/364837260baa4486888554a2ea7666c6"
                  target="_blank"
                  rel="noopener"
                >
                  お問い合わせ
                </a>
              </li>
              <li className="Navigation__Item">
                <a
                  href="https://inialum.notion.site/INIALUM-Q-A-0cfb2bd4cc814df6a29ca5aa7f9ad9b7"
                  target="_blank"
                  rel="noopener"
                >
                  Q&A
                </a>
              </li>
            </ul>
          </nav>
          <div className="Navigation__Content--bottom">
            <a
              href="https://twitter.com/inialum"
              target="_blank"
              rel="noopener"
              className="Navigation__Item--XLink"
            >
              <XLogo
                width="auto"
                height={24}
                aria-label="X公式アカウント"
                className="Navigation__Item--XLogo"
              />
            </a>
            <div className="Navigation__Item--small">
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
              <a
                href="https://github.com/inialum"
                target="_blank"
                rel="noopener"
              >
                GitHub
              </a>
            </div>
            <div className="Navigation__Item--small">
              &copy; {nowYear} INIALUM - INIAD Alumni Meetings.
            </div>
          </div>
        </div>
      </dialog>
    </RemoveScroll>
  )
}
