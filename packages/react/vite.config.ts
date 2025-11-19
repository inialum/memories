import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import { globbySync } from 'globby'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import svgr from 'vite-plugin-svgr'

import pkg from './package.json'

export default defineConfig({
	plugins: [
		svgr({
			svgrOptions: {
				svgoConfig: {
					plugins: ['preset-default'],
				},
			},
		}),
		dts({
			include: 'src',
			staticImport: true,
		}),
		tailwindcss(),
		react(),
	],
	build: {
		target: 'esnext',
		minify: false,
		sourcemap: true,
		lib: {
			formats: ['es'],
			entry: globbySync(['src/**/index.ts']),
			fileName: 'index.js',
		},
		rollupOptions: {
			external: [
				...Object.keys(pkg.dependencies ?? {}),
				...Object.keys(pkg.peerDependencies ?? {}),
				'react/jsx-runtime',
			],
			output: {
				format: 'es',
				preserveModules: true,
				preserveModulesRoot: 'src',
				exports: 'named',
				entryFileNames: '[name].js',
			},
		},
	},
})
