import { type CSSRuleObject } from 'tailwindcss/types/config'

export const Navigation: CSSRuleObject = {
  '.Navigation': {
    '@apply bg-blue-600 text-base-WHITE m-0 p-0 max-h-full h-svh left-full -translate-x-full sm:w-372 w-full':
      {},

    transition: 'opacity .5s',

    '&[open]': {
      '@apply flex': {},
    },

    '&::backdrop': {
      transition: 'opacity 0.5s',
    },

    '&:not([open])::backdrop': {
      '@apply opacity-0': {},
    },

    '&[open]::backdrop': {
      '@apply opacity-100': {},

      background: 'rgba(0, 53, 71, 0.20)',
    },
  },

  '.Navigation__Content': {
    '@apply w-full h-full': {},
  },

  '.Navigation__CloseButton': {
    '@apply absolute top-20 right-20 p-4 fill-base-WHITE': {},
  },

  '.Navigation__Logo--mobile': {
    '@apply object-cover h-160 w-160 p-12 sm:hidden': {},
  },

  '.Navigation__Content--main': {
    '@apply flex flex-col justify-center gap-y-32 px-36 py-32 sm:mt-160': {},
  },

  '.Navigation__Item': {
    '@apply font-bold': {},

    fontSize: '12px',
  },

  '.Navigation__Content--bottom': {
    '@apply flex flex-col justify-center border-t border-t-gray-300 gap-y-24 pt-24 mx-36 pb-80 sm:w-300':
      {},
  },

  '.Navigation__Item--XLink': {
    '@apply flex items-center w-fit': {},
  },

  '.Navigation__Item--XLogo': {
    '@apply h-24 fill-base-WHITE': {},

    aspectRatio: '23.4 / 24',
  },

  '.Navigation__Item--small': {
    '@apply flex items-center gap-x-20 text-gray-300': {},

    fontSize: '8px',
  },
}
