export type NavigationProps = HTMLDialogElement

export const createNavigation = (_props: NavigationProps) => {
  const navigationElem = document.createElement('dialog')
  navigationElem.className = 'Navigation'
  const nowYear = new Date().getFullYear()

  navigationElem.innerHTML = `
      <button class="Navigation__CloseButton" aria-label="閉じる" id="closeButton">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 6L6 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6 6L18 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <nav>
        <ul class="Navigation__Content--main">
          <li class="Navigation__Item">
            <a href="/">ホーム</a>
          </li>
          <li class="Navigation__Item">
            <a href="/vision">私たちの思い</a>
          </li>
          <li class="Navigation__Item">
            <a href="https://inialum.org/join">入会する</a>
          </li>
          <li class="Navigation__Item">
            <a
              href="https://inialum.notion.site/364837260baa4486888554a2ea7666c6"
              target="_blank"
              rel="noopener"
            >
              お問い合わせ
            </a>
          </li>
          <li class="Navigation__Item">
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
      <div class="Navigation__Content--bottom">
        <a href="https://twitter.com/inialum" target="_blank" rel="noopener" class="Navigation__Item--XLink">
          <svg viewBox="0 0 1200 1227" class="Navigation__Item--XLogo" fill="#000"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
          </svg>
        </a>
        <div class="Navigation__Item--small">
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
        <div class="Navigation__Item--small">
          &copy; ${nowYear} INIALUM - INIAD Alumni Meetings.
        </div>
      </div>
  `

  const onClose = () => {
    navigationElem.close()
  }

  navigationElem
    .querySelector('#closeButton')
    ?.addEventListener('click', onClose)

  return navigationElem
}
