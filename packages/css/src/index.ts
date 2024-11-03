import plugin from 'tailwindcss/plugin'

import { Button, ButtonLink, Footer, Header, Navigation } from '@/components'
import { tailwindConfig } from '@/tailwind/config'
import type { ConfigOptions } from '@/types'

const memories = plugin.withOptions<ConfigOptions>(
	(options) => {
		return ({ addComponents }) => {
			addComponents([Button, ButtonLink, Footer, Header, Navigation])

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
