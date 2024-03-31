export const createFooter = () => {
  const footerElem = document.createElement('footer')
  const nowYear = new Date().getFullYear()

  footerElem.innerHTML = `
  <footer class="Footer">
    <div class="Footer__Head">
      <img
        src=""
        alt="INIALUM - INIAD Alumni Meetings"
        class="Footer__Logo"
      />
      <div class="Footer__Copy">
        さらなる連携を、ともに歩んだ仲間と
      </div>
    </div>
    <nav>
      <ul class="Footer__NavList">
        <li class="Footer__Item">
          <a href="/">ホーム</a>
        </li>
        <li class="Footer__Item">
          <a href="https://inialum.org/join">入会する</a>
        </li>
      </ul>
    </nav>
    <div class="Footer__Bottom">
      <div class="Footer__Item--top">
        <a href="https://twitter.com/inialum" target="_blank" rel="noopener">
          <img
            src="https://static-assets.inialum.org/images%2Fsocial%2Fx_icon.png"
            alt="X公式アカウント"
            width="24"
            height="24"
          />
        </a>
      </div>
      <div class="Footer__Item--small">
        <a
          href="https://inialum.notion.site/4cbf67b190544bff8891deabc64e776c"
          target="_blank"
          rel="noopener"
        >
          同窓会会則
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
      <div class="Footer__Item--small">
        &copy; ${nowYear} INIALUM - INIAD Alumni Meetings.
      </div>
    </div>
  </footer>
`

  return footerElem
}
