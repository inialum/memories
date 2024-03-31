import { type CSSRuleObject } from 'tailwindcss/types/config'

export const Footer: CSSRuleObject = {
  '.Footer': {
    '@apply bg-base-BLOCK pt-52 px-52 pb-28': {},
  },

  '.Footer__Head': {
    '@apply flex flex-col items-center justify-center gap-y-12': {},
  },

  '.Footer__Head .Footer__Logo': {
    '@apply object-cover w-120 h-120': {},
  },

  '.Footer__Head .Footer__Copy': {
    '@apply font-bold': {},
    fontSize: '8px',
  },

  '.Footer .Footer__NavList': {
    '@apply flex flex-col items-center text-center gap-y-32 py-0 pt-40 pb-32':
      {},
  },

  '.Footer .Footer__NavList .Footer__Item': {
    '@apply font-bold': {},
    fontSize: '12px',
  },

  '.Footer .Footer__Bottom': {
    '@apply flex flex-col items-center text-center border-t border-t-gray-500 max-w-[732px] mx-auto gap-y-16 pt-28 px-0 pb-0':
      {},
  },

  '.Footer .Footer__Bottom .Footer__Item--top': {
    '@apply flex items-center justify-center pt-0 px-0 pb-12': {},
  },

  '.Footer .Footer__Bottom .Footer__Item--small': {
    '@apply flex items-center justify-center text-gray-500 gap-x-20': {},
    fontSize: '8px',
  },
}
