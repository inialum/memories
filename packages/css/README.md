# @inialum/memories-css

[![npm version](https://img.shields.io/npm/v/%40inialum%2Fmemories-css?style=flat&label=npm%20version&color=36B011&cacheSeconds=3600)](https://www.npmjs.com/package/@inialum/memories-css)

Fundamental CSS styles for the Memories - INIALUM Design System.  
This library is provided as a Tailwind CSS plugin.

- [Storybook](https://memories-css.pages.dev)

## Installation

Before installing this package, make sure you have installed [Tailwind CSS](https://tailwindcss.com/docs/installation).

```bash
pnpm add -D @inialum/memories-css
```

## Tailwind CSS Configuration
You should add the `memories` plugin to your `tailwind.config.[ts|js|cjs]`.

```ts
// tailwind.config.ts

import { memories } from '@inialum/memories-css'
import { type Config } from 'tailwindcss'

const config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  plugins: [memories],
} satisfies Config

export default config
```

## License

Licensed under [Apache License 2.0](LICENSE). (except for images)  
You are not allowed to use or distribute the images.
