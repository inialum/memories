import { resolve } from 'node:path'

import type { StorybookConfig } from '@storybook/html-vite'

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
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
