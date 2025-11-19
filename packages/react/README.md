# @inialum/memories-react

[![npm version](https://img.shields.io/npm/v/%40inialum%2Fmemories-react?style=flat&label=npm%20version&color=36B011&cacheSeconds=3600)](https://www.npmjs.com/package/@inialum/memories-react)

React component library for the Memories - INIALUM Design System.

- [Storybook](https://memories-react.pages.dev)

## Installation

This package requires [Tailwind CSS](https://tailwindcss.com/docs/installation) and React 19.

```bash
pnpm add @inialum/memories-tailwind-theme @inialum/memories-react
pnpm add -D tailwindcss
```

## Setup

### 1. Import CSS Styles

Import the Memories CSS theme in your global CSS file:

```css
/* src/index.css or src/app.css */
@import 'tailwindcss';
@import '@inialum/memories-tailwind-theme';
```

### 2. Add data-theme Attribute

Add the `data-theme` attribute to your HTML:

```html
<!doctype html>
<html lang="en" data-theme="memories">
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

### 3. Tailwind CSS Configuration

Update your `tailwind.config.ts`:

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config = {
  content: [
    './src/**/*.{ts,tsx}',
    './node_modules/@inialum/memories-react/**/*.js',
  ],
} satisfies Config

export default config
```

## Usage

```tsx
import { Button } from '@inialum/memories-react'

function App() {
  return (
    <Button variant="filled" color="primary" size="medium">
      Click me
    </Button>
  )
}
```

## Components

- Button
- ButtonLink
- Footer
- Header
- Navigation

See [Storybook](https://memories-react.pages.dev) for detailed documentation and examples.

## License

Licensed under [Apache License 2.0](LICENSE). (except for images)  
You are not allowed to use or distribute the images.
