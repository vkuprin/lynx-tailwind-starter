# Lynx Tailwind CSS Starter Template

![Lynx + Tailwind CSS](https://img.shields.io/badge/Lynx-Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

A starter template for building Lynx applications with Tailwind CSS integration. This template provides a solid foundation for creating beautiful, responsive mobile applications using the power of Tailwind's utility-first CSS framework.

## Tailwind bugs related
https://github.com/lynx-family/lynx/issues/356

## Getting Started

### Installation

1. Clone this repository or use it as a github template:

```bash
# Clone the repository
git clone https://github.com/vkuprin/lynx-tailwind-starter.git
cd lynx-tailwind-starter
```

2. Install the dependencies:

```bash
# Using yarn
yarn install
```

### Development

Start the development server:

```bash
# Using yarn berry
yarn dev
```

Scan the QR code displayed in your terminal with the LynxExplorer App on your mobile device to see the application in action.

## Tailwind CSS Integration

This template comes with Tailwind CSS pre-configured and ready to use. Here's how it's set up:

### Configuration Files

- **tailwind.config.js**: Contains the Tailwind configuration with the Lynx preset
- **postcss.config.js**: Configures PostCSS to process Tailwind directives

### CSS Files

- **src/tailwind.css**: Contains the Tailwind directives and custom styles

### Using Tailwind in Your Components

You can use Tailwind utility classes directly in your components:

```jsx
<view className="flex flex-col items-center justify-center p-4 bg-blue-500 rounded-lg">
  <text className="text-white text-xl font-bold">Hello Tailwind!</text>
</view>
```

## How to Set Up Tailwind CSS in a New Lynx Project

If you want to add Tailwind CSS to an existing Lynx project, follow these steps:

1. Install the required dependencies:

```bash
npm install tailwindcss autoprefixer postcss postcss-loader @lynx-js/tailwind-preset-canary
```

2. Create a `tailwind.config.js` file:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('@lynx-js/tailwind-preset-canary')],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

3. Create a `postcss.config.js` file:

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

4. Create a `src/tailwind.css` file with the Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Add your custom styles here */
```

5. Import the CSS file in your entry point (e.g., `src/index.tsx`):

```tsx
import './tailwind.css';
```

6. Start using Tailwind classes in your components!

## License

MIT
