export const Button = {
  '.Button': {
    '@apply inline-flex items-center justify-center cursor-pointer': {},
  },

  '.Button--filled': {
    '@apply text-base-WHITE border': {},
  },

  '.Button--filled.Button--primary': {
    '@apply bg-blue-400 border-blue-400': {},
  },

  '.Button--filled.Button--white': {
    '@apply bg-base-WHITE border-base-WHITE text-primary': {},
  },

  '.Button--outlined': {
    '@apply box-border border-2 bg-transparent': {},
  },

  '.Button--outlined.Button--primary': {
    '@apply border-blue-400 text-blue-400': {},
  },

  '.Button--fullWidth': {
    '@apply Button--medium w-full': {},
  },

  '.Button--medium': {
    '@apply text-lg py-3 px-8': {},
  },

  '.Button--rounded': {
    '@apply rounded': {},
  },

  '.Button--more-rounded': {
    'border-radius': '32px',
  },

  '.Button--disabled': {
    '@apply cursor-not-allowed': {},
  },

  '.Button--disabled.Button--filled': {
    '@apply bg-gray-300 border-gray-300': {},
  },

  '.Button--disabled.Button--outlined': {
    '@apply border-gray-300 text-gray-300': {},
  },
}
