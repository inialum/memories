import { type Config } from 'tailwindcss'

import { memories } from '@/index'

const config = {
  content: ['./stories/**/*.{ts,mdx}'],
  plugins: [memories],
} satisfies Config

export default config
