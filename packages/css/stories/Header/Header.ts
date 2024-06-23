import {
  type NavigationProps,
  createNavigation,
} from '@memories-css/stories/Navigation/Navigation'

export const createHeader = () => {
  const headerElem = document.createElement('header')
  headerElem.className = 'Header'
  headerElem.innerHTML = `
    <div class="Header__Logo--large">
      <svg id="_layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" width='100%'><defs><style>.cls-logo-light-1{fill:#221716;}.cls-logo-light-1,.cls-logo-light-2{stroke-width:0px;}.cls-logo-light-2{fill:#00b0eb;}</style></defs><path class="cls-logo-light-1" d="M32.39,129.43h2.98v20.8h-2.98v-20.8Z"/><path class="cls-logo-light-1" d="M56.51,129.43h2.83v20.8h-2.56l-13.91-16.02v16.02h-2.8v-20.8h2.41l14.02,16.15v-16.15Z"/><path class="cls-logo-light-1" d="M63.82,129.43h2.98v20.8h-2.98v-20.8Z"/><path class="cls-logo-light-1" d="M78.05,129.31h2.09l9.33,20.92h-3.05l-2.77-6.16h-8.87l-2.6,6.16h-3.06l8.93-20.92ZM82.43,141.41l-3.36-7.53-3.11,7.53h6.47Z"/><path class="cls-logo-light-1" d="M91.75,129.43h2.98v18.09h9.36v2.71h-12.34v-20.8Z"/><path class="cls-logo-light-1" d="M121.17,129.43h2.99v11.81c0,1.6-.12,2.8-.35,3.62-.23.81-.52,1.49-.86,2.03-.34.54-.76,1.03-1.26,1.45-1.65,1.42-3.8,2.13-6.46,2.13s-4.88-.71-6.52-2.11c-.5-.44-.92-.92-1.26-1.47-.34-.54-.63-1.2-.85-1.99-.22-.78-.33-2.01-.33-3.69v-11.78h2.99v11.81c0,1.96.22,3.32.67,4.08.45.76,1.13,1.38,2.04,1.84.91.46,1.99.69,3.23.69,1.77,0,3.21-.46,4.32-1.38.58-.5,1.01-1.08,1.27-1.76.26-.67.39-1.83.39-3.47v-11.81Z"/><path class="cls-logo-light-1" d="M144.82,129.43h2.78v20.8h-2.99v-16.18l-6.39,8.04h-.55l-6.47-8.04v16.18h-2.98v-20.8h2.82l6.91,8.54,6.87-8.54Z"/><path class="cls-logo-light-1" d="M43.85,157.63v6.82h-.53v-6.82h.53Z"/><path class="cls-logo-light-1" d="M51.55,157.63v6.82h-.43l-5.19-5.96v5.96h-.53v-6.82h.45l5.17,5.96v-5.96h.53Z"/><path class="cls-logo-light-1" d="M53.64,157.63v6.82h-.53v-6.82h.53Z"/><path class="cls-logo-light-1" d="M57.9,157.58l3.15,6.87h-.55l-1.08-2.36h-3.34l-1.08,2.36h-.55l3.15-6.87h.29ZM59.22,161.65l-1.47-3.21-1.46,3.21h2.93Z"/><path class="cls-logo-light-1" d="M61.87,157.63h2.39c1.21,0,2.13.32,2.77.95.64.63.95,1.46.95,2.46s-.32,1.8-.94,2.44c-.63.64-1.52.96-2.68.96h-2.48v-6.82ZM62.4,158.07v5.94h1.92c.88,0,1.62-.27,2.21-.81.59-.54.88-1.26.88-2.16s-.29-1.59-.87-2.14-1.33-.83-2.25-.83h-1.89Z"/><path class="cls-logo-light-1" d="M74.75,157.58l3.15,6.87h-.55l-1.08-2.36h-3.34l-1.08,2.36h-.55l3.15-6.87h.29ZM76.07,161.65l-1.47-3.21-1.46,3.21h2.93Z"/><path class="cls-logo-light-1" d="M79.12,157.63v6.82h-.48v-6.82h.48Z"/><path class="cls-logo-light-1" d="M83.6,164.45v-.74h-.02c-.21.3-.42.51-.64.64-.22.13-.5.19-.84.19-.48,0-.88-.16-1.2-.47s-.47-.75-.47-1.33v-2.78h.48v2.77c0,.42.11.74.34.98s.52.36.89.36c.31,0,.58-.07.8-.21.22-.14.44-.39.66-.74v-3.15h.48v4.49h-.48Z"/><path class="cls-logo-light-1" d="M85.8,159.96v.79h.02c.36-.59.84-.88,1.43-.88.69,0,1.17.36,1.45,1.08.42-.72.94-1.08,1.56-1.08.47,0,.84.17,1.13.5s.43.77.43,1.32v2.76h-.48v-2.55c0-.49-.1-.87-.31-1.14-.21-.28-.49-.42-.86-.42-.28,0-.52.08-.72.25s-.42.43-.63.8v3.06h-.48v-2.56c0-.5-.11-.88-.32-1.15-.21-.27-.5-.4-.86-.4-.52,0-.97.32-1.35.96v3.15h-.48v-4.49h.48Z"/><path class="cls-logo-light-1" d="M93.52,159.96v.78h.02c.37-.58.87-.87,1.48-.87.51,0,.91.16,1.22.49s.45.78.45,1.35v2.74h-.48v-2.56c0-1.04-.41-1.55-1.22-1.55-.6,0-1.09.32-1.47.96v3.15h-.48v-4.49h.48Z"/><path class="cls-logo-light-1" d="M98.51,157.63v.82h-.48v-.82h.48ZM98.51,159.96v4.49h-.48v-4.49h.48Z"/><path class="cls-logo-light-1" d="M105.89,160.8l2.59-3.17h.53v6.82h-.53v-6.05l-2.59,3.19-2.61-3.19v6.05h-.53v-6.82h.53l2.61,3.17Z"/><path class="cls-logo-light-1" d="M114.24,162.04h-3.54c0,.08-.01.16-.01.23,0,.5.18.93.54,1.27s.78.52,1.27.52c.57,0,1.13-.22,1.67-.67v.54c-.51.4-1.09.6-1.73.6s-1.18-.22-1.61-.67-.63-1.02-.63-1.71c0-.66.2-1.2.59-1.63.39-.43.88-.65,1.47-.65.56,0,1.03.19,1.41.58.38.39.58.92.58,1.58ZM110.77,161.65h2.91c-.17-.88-.64-1.31-1.42-1.31-.37,0-.69.12-.96.34-.27.23-.45.55-.53.97Z"/><path class="cls-logo-light-1" d="M119.03,162.04h-3.54c0,.08-.01.16-.01.23,0,.5.18.93.54,1.27s.78.52,1.27.52c.57,0,1.13-.22,1.67-.67v.54c-.51.4-1.09.6-1.73.6s-1.18-.22-1.61-.67-.63-1.02-.63-1.71c0-.66.2-1.2.59-1.63.39-.43.88-.65,1.47-.65.56,0,1.03.19,1.41.58.38.39.58.92.58,1.58ZM115.56,161.65h2.91c-.17-.88-.64-1.31-1.42-1.31-.37,0-.69.12-.96.34-.27.23-.45.55-.53.97Z"/><path class="cls-logo-light-1" d="M120.87,158.47v1.49h1.26v.39h-1.26v2.67c0,.43.04.71.1.85.07.14.26.2.56.2.23,0,.51-.07.82-.22v.46c-.32.15-.62.23-.93.23s-.54-.08-.74-.25-.3-.4-.3-.7v-3.23h-1.21v-.39h1.21v-1.07l.33-.42h.15Z"/><path class="cls-logo-light-1" d="M123.57,157.63v.82h-.48v-.82h.48ZM123.57,159.96v4.49h-.48v-4.49h.48Z"/><path class="cls-logo-light-1" d="M125.37,159.96v.78h.02c.37-.58.87-.87,1.48-.87.51,0,.91.16,1.22.49s.45.78.45,1.35v2.74h-.48v-2.56c0-1.04-.41-1.55-1.22-1.55-.6,0-1.09.32-1.47.96v3.15h-.48v-4.49h.48Z"/><path class="cls-logo-light-1" d="M133.34,159.96v.39h-1.02c.41.38.62.77.62,1.19,0,.37-.08.67-.24.89-.16.22-.35.38-.58.48-.22.1-.52.2-.89.29-.37.1-.6.19-.7.27s-.14.18-.14.29c0,.13.06.23.18.31.12.08.5.13,1.14.17.64.04,1.07.16,1.29.37s.33.49.33.83c0,.41-.18.73-.53.96-.35.23-.85.35-1.48.35s-1.11-.11-1.46-.33c-.34-.22-.51-.51-.51-.87,0-.59.44-.95,1.31-1.09v-.02c-.49-.11-.73-.33-.73-.64s.3-.56.9-.73v-.02c-.39-.12-.69-.31-.9-.58-.2-.27-.3-.57-.3-.91,0-.47.16-.86.49-1.15.33-.3.8-.45,1.42-.45h1.8ZM131.35,166.35c.47,0,.84-.08,1.11-.24.27-.16.41-.37.41-.63,0-.53-.48-.79-1.43-.79-1.09,0-1.63.28-1.63.83s.51.83,1.54.83ZM131.28,162.75c.33,0,.61-.12.85-.35.24-.24.35-.52.35-.85s-.12-.61-.35-.84c-.24-.23-.52-.35-.86-.35s-.61.11-.84.34-.34.5-.34.83.12.63.35.86.51.36.84.36Z"/><path class="cls-logo-light-1" d="M136.53,160.25v.52c-.46-.31-.87-.46-1.23-.46-.27,0-.5.07-.68.22-.19.15-.28.33-.28.54,0,.15.06.29.17.42.11.13.42.29.93.49s.84.4,1,.61.23.45.23.71c0,.35-.14.64-.42.88-.28.24-.63.36-1.05.36-.45,0-.9-.14-1.35-.41v-.47c.53.27,1,.41,1.41.41.28,0,.5-.07.68-.22.18-.15.27-.33.27-.56,0-.16-.06-.3-.17-.43-.12-.13-.43-.3-.94-.5-.51-.2-.84-.4-.99-.6-.15-.2-.23-.42-.23-.66,0-.34.14-.63.42-.87.28-.24.62-.36,1.03-.36.37,0,.77.13,1.2.38Z"/><circle class="cls-logo-light-2" cx="90" cy="69.36" r="6"/><circle class="cls-logo-light-2" cx="103.37" cy="112.4" r="6"/><circle class="cls-logo-light-2" cx="76.62" cy="112.4" r="6"/><polygon class="cls-logo-light-2" points="101.47 111.91 90 75.81 78.52 111.91 74.65 111.04 88.06 68.84 91.93 68.84 105.35 111.04 101.47 111.91"/><path class="cls-logo-light-1" d="M89.02,19.71l-5.23,6.27c-.69.83-.1,2.08.98,2.08h10.45c1.08,0,1.67-1.26.98-2.08l-5.23-6.27c-.51-.61-1.44-.61-1.95,0Z"/><path class="cls-logo-light-1" d="M90,58.67c.68,0,1.35.07,2,.19V26.17h-4v32.69c.65-.12,1.32-.19,2-.19Z"/><path class="cls-logo-light-1" d="M54.2,34.94l.74,8.13c.1,1.07,1.4,1.54,2.16.78l7.39-7.39c.76-.76.29-2.07-.78-2.16l-8.13-.74c-.79-.07-1.45.59-1.38,1.38Z"/><path class="cls-logo-light-1" d="M82.44,61.8c.48-.48,1.01-.91,1.55-1.28l-23.12-23.12-2.83,2.83,23.12,23.12c.37-.55.79-1.07,1.28-1.55Z"/><path class="cls-logo-light-1" d="M40.35,70.33l6.27,5.23c.83.69,2.08.1,2.08-.98v-10.45c0-1.08-1.26-1.67-2.08-.98l-6.27,5.23c-.61.51-.61,1.44,0,1.95Z"/><path class="cls-logo-light-1" d="M79.31,69.36c0-.68.07-1.35.19-2h-32.69s0,4,0,4h32.69c-.12-.65-.19-1.32-.19-2Z"/><path class="cls-logo-light-1" d="M139.65,68.38l-6.27-5.23c-.83-.69-2.08-.1-2.08.98v10.45c0,1.08,1.26,1.67,2.08.98l6.27-5.23c.61-.51.61-1.44,0-1.95Z"/><path class="cls-logo-light-1" d="M100.69,69.36c0,.68-.07,1.35-.19,2h32.69s0-4,0-4h-32.69c.12.65.19,1.32.19,2Z"/><path class="cls-logo-light-1" d="M124.41,33.56l-8.13.74c-1.07.1-1.54,1.4-.78,2.16l7.39,7.39c.76.76,2.07.29,2.16-.78l.74-8.13c.07-.79-.59-1.45-1.38-1.38Z"/><path class="cls-logo-light-1" d="M97.56,61.8c.48.48.91,1.01,1.28,1.55l23.12-23.12-2.83-2.83-23.12,23.12c.55.37,1.07.79,1.55,1.28Z"/></svg>
    </div>
    <button class="Header__Navigation--button" title="ナビゲーションメニュー" aria-label="ナビゲーションメニューを開く" id="navigationButton">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 6H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 18H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
  `

  const navigationProps = {} as NavigationProps
  const navigationElem = createNavigation(navigationProps)

  let isOpen = false
  const onOpen = () => {
    if (isOpen) {
      isOpen = false
      navigationElem.close()
      return
    }
    isOpen = true
    navigationElem.showModal()
  }

  headerElem.appendChild(navigationElem)
  headerElem
    .querySelector('#navigationButton')
    ?.addEventListener('click', onOpen)

  return headerElem
}
