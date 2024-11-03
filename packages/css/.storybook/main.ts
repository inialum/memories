import { dirname, join, resolve } from 'node:path'

import type { StorybookConfig } from '@storybook/html-vite'

// biome-ignore lint/suspicious/noExplicitAny: Suppressing this error because the type of `getAbsolutePath` is not explicitly defined in the Storybook API.
const getAbsolutePath = (packageName: string): any =>
	dirname(require.resolve(join(packageName, 'package.json')))

const config: StorybookConfig = {
	stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(ts|tsx)'],

	addons: [
		getAbsolutePath('@storybook/addon-links'),
		getAbsolutePath('@storybook/addon-essentials'),
		getAbsolutePath('@storybook/addon-interactions'),
		getAbsolutePath('@storybook/addon-a11y'),
	],

	framework: {
		name: getAbsolutePath('@storybook/html-vite'),
		options: {},
	},

	viteFinal(config) {
		return {
			...config,
			define: { 'process.env': {} }, // Workaround for "process is not defined" error. NOTE: https://github.com/storybookjs/storybook/issues/18920#issuecomment-1310602214
			resolve: {
				alias: [
					{
						find: '@memories-css',
						replacement: resolve(__dirname, '../'),
					},
					{
						find: '@',
						replacement: resolve(__dirname, '../src'),
					},
				],
			},
		}
	},
}
export default config
