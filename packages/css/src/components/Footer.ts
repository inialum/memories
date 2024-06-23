import { type CSSRuleObject } from 'tailwindcss/types/config'

export const Footer: CSSRuleObject = {
  '.Footer': {
    '@apply bg-base-BLOCK pt-52 px-48 pb-28 md:pb-64': {},
  },

  '.Footer__Head': {
    '@apply flex flex-col items-center justify-center gap-y-12 md:gap-y-16': {},
  },

  '.Footer__Head .Footer__Logo': {
    '@apply object-cover w-120 h-120 md:w-280 md:h-280': {},
  },

  '.Footer__Head .Footer__Copy': {
    '@apply font-bold': {},
    fontSize: '8px',

    '@media (768px <= width)': {
      fontSize: '13px',
    },
  },

  '.Footer .Footer__NavList': {
    '@apply flex flex-col items-center text-center gap-y-32 md:gap-y-48 py-0 pt-40 md:py-56 pb-28':
      {},
  },

  '.Footer .Footer__NavList .Footer__Item': {
    '@apply font-bold': {},
    fontSize: '12px',

    '@media (768px <= width)': {
      fontSize: '16px',
    },
  },

  '.Footer .Footer__Bottom': {
    '@apply flex flex-col items-center text-center border-t border-t-gray-500 max-w-[732px] mx-auto gap-y-16 md:gap-y-36 pt-28 md:pt-56 px-0 pb-0':
      {},
  },

  '.Footer .Footer__Bottom .Footer__Item--top': {
    '@apply flex items-center justify-center pt-0 px-0 pb-12 md:pb-8': {},
  },

  '.Footer .Footer__Bottom .Footer__Item--small': {
    '@apply flex items-center justify-center text-gray-500 gap-x-20 md:gap-x-48':
      {},
    fontSize: '8px',

    '@media (768px <= width)': {
      fontSize: '14px',
    },
  },

  '.Footer .Footer__Bottom .Footer__Item--XLogo': {
    '@apply h-24 md:h-32 fill-black': {},
  },
}
