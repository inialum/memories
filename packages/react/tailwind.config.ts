import { memories } from '@inialum/memories-css'
import type { Config } from 'tailwindcss'

const config = {
  content: ['./src/**/*.{tsx,mdx}'],
  plugins: [memories],
} satisfies Config

export default config
