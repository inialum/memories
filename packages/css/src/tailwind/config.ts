import type { Config } from 'tailwindcss'

import { colors, spacing } from '@/foundations'

type TailwindConfig = Omit<Config, 'content'>
export const tailwindConfig: TailwindConfig = {
  theme: {
    extend: {
      colors,
      spacing,
    },
  },
}
