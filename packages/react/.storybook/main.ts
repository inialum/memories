import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
	stories: ['../stories/**/*.mdx', '../src/components/**/*.stories.@(ts|tsx)'],

	addons: [
		getAbsolutePath('@storybook/addon-links'),
		getAbsolutePath('@storybook/addon-a11y'),
		getAbsolutePath('@storybook/addon-docs'),
	],

	framework: {
		name: getAbsolutePath('@storybook/react-vite'),
		options: {},
	},

	viteFinal(config) {
		return {
			...config,
			define: { 'process.env': {} }, // Workaround for "process is not defined" error. NOTE: https://github.com/storybookjs/storybook/issues/18920#issuecomment-1310602214
		}
	},

	typescript: {
		reactDocgen: 'react-docgen-typescript',
	},
}
export default config

function getAbsolutePath(value: string) {
	return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)))
}
