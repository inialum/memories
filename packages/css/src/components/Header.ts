import { type CSSRuleObject } from 'tailwindcss/types/config'

export const Header: CSSRuleObject = {
  '.Header': {
    '@apply relative flex items-center bg-primary w-full relative h-60': {},
  },

  '.Header__Logo--large': {
    '@apply absolute top-0 left-0 flex items-center justify-center w-160 h-160 p-12 md:w-[320px] md:h-[320px] md:p-24 bg-base-WHITE absolute z-30':
      {},
  },

  '.Header__Navigation--button': {
    '@apply ml-auto mr-24 fill-base-WHITE': {},
  },
}
