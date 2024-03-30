import type { Config } from 'tailwindcss'

type TailwindConfig = Omit<Config, 'content'>
const buildTailwindConfig = () => {
  return {
    theme: {
      extend: {},
    },
    plugins: [],
  }
}

export const config: TailwindConfig = buildTailwindConfig()
