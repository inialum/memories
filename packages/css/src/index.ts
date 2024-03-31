import plugin from 'tailwindcss/plugin'

import { Button } from '@/components'
import { tailwindConfig } from '@/tailwind/config'
import { type ConfigOptions } from '@/types'

const memories = plugin.withOptions<ConfigOptions>(
  (options) => {
    return ({ addComponents }) => {
      addComponents([Button])

      if (options?.base !== false) {
        // TODO: Add base styles here
      }
    }
  },
  () => {
    return { ...tailwindConfig }
  },
)

export { memories }
export type { ConfigOptions }
