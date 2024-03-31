export const ButtonLink = {
  '.ButtonLink': {
    '@apply inline-flex items-center justify-center cursor-pointer': {},
  },

  '.ButtonLink--filled': {
    '@apply text-base-WHITE border': {},
  },

  '.ButtonLink--filled.ButtonLink--primary': {
    '@apply bg-blue-400 border-blue-400': {},
  },

  '.ButtonLink--filled.ButtonLink--white': {
    '@apply bg-base-WHITE border-base-WHITE text-primary': {},
  },

  '.ButtonLink--outlined': {
    '@apply box-border border-2 bg-transparent': {},
  },

  '.ButtonLink--outlined.ButtonLink--primary': {
    '@apply border-blue-400 text-blue-400': {},
  },

  '.ButtonLink--full-width': {
    '@apply ButtonLink--medium w-full': {},
  },

  '.ButtonLink--large': {
    '@apply text-xl py-16 px-40': {},
  },

  '.ButtonLink--medium': {
    '@apply text-lg py-12 px-32': {},
  },

  '.ButtonLink--small': {
    '@apply text-base py-8 px-24': {},
  },

  '.ButtonLink--rounded': {
    '@apply rounded': {},
  },

  '.ButtonLink--more-rounded': {
    'border-radius': '32px',
  },

  '.ButtonLink--disabled': {
    '@apply cursor-not-allowed': {},
  },

  '.ButtonLink--disabled.ButtonLink--filled': {
    '@apply bg-gray-300 border-gray-300': {},
  },

  '.ButtonLink--disabled.ButtonLink--outlined': {
    '@apply border-gray-300 text-gray-300': {},
  },
}
