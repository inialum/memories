import { resolve } from 'node:path'

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
	plugins: [
		react(),
		svgr({
			svgrOptions: {
				svgoConfig: {
					plugins: ['preset-default'],
				},
			},
		}),
		dts({
			include: 'src',
		}),
	],
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: '@inialum/memories-react',
			fileName: 'index',
			formats: ['es'],
		},
		rollupOptions: {
			external: ['react'],
		},
		sourcemap: true,
	},
	resolve: {
		alias: [
			{
				find: '@memories-react',
				replacement: resolve(__dirname, '.'),
			},
			{
				find: '@',
				replacement: resolve(__dirname, './src'),
			},
		],
	},
})
