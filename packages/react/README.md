# @inialum/memories-react

[![npm version](https://img.shields.io/npm/v/%40inialum%2Fmemories-react?style=flat&label=npm%20version&color=05809E&cacheSeconds=3600)](https://www.npmjs.com/package/@inialum/memories-react)

React component library for the Memories - INIALUM Design System.

- [Storybook](https://memories-react.pages.dev)

## Installation

Before installing this package, make sure you have installed [Tailwind CSS](https://tailwindcss.com/docs/installation).

```bash
pnpm add -D @inialum/memories-css @inialum/memories-react
```

## Tailwind CSS Configuration
You should add the `memories` plugin to your `tailwind.config.[ts|js|cjs]`.  
Also, you should add the `@inialum/memories-react` to the `content` option.

```ts
// tailwind.config.ts

import { memories } from '@inialum/memories-css'
import { type Config } from 'tailwindcss'

const config = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',

    // Do not forget to add this line!
    './node_modules/@inialum/memories-react/**/*.js',
  ],
  plugins: [memories],
} satisfies Config

export default config
```

## License

Licensed under [Apache License 2.0](LICENSE). (except for images)  
You are not allowed to use or distribute the images.
