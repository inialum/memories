import { defineConfig } from 'vite'

export default defineConfig({
	logLevel: 'error',
	build: {
		cssCodeSplit: true,
		cssMinify: false,
		lib: {
			formats: ['es'],
			entry: {
				index: 'src/index.css',
			},
		},
	},
})
