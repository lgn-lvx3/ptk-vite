# Pelvic Toolkit Calculators

This project contains outcome measurements for pelvic surveys.

Currently deployed on [ptk.lvx3.com](https://ptk.lvx3.com)

# Frameworks Used
## Core
- [ReactJS](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org)

## Builds and Testing
- [Vite](https://vitejs.dev)
- [Vitest](https://vitest.dev)
- [Testing Library](https://testing-library.com)

## State Management
- [Zustood](https://github.com/udecode/zustood)

## Routing
- [react-router-dom](https://reactrouter.com/en/main)

## Styling
- [Tailwindcss](https://tailwindcss.com)
- [daisyUI](https://daisyui.com/)
- [auto-animate](https://auto-animate.formkit.com/)

## PDF Generation
- [@react-pdf/renderer](https://github.com/diegomura/react-pdf)

## Translations
- [i18n-js](https://github.com/fnando/i18n-js)

## Deployment
- [Azure-SWA](https://learn.microsoft.com/en-us/azure/static-web-apps/overview)


## Build Pipeline
The project is built and deployed using the azure static web apps flow from GitHub actions.

## Installing / Using the project

```bash
npx degit joaopaulomoraes/reactjs-vite-tailwindcss-boilerplate my-app
```

Access the project directory.

```bash
cd my-app
```

Install dependencies.

```bash
yarn install
```

Serve with hot reload at <http://localhost:5173>.

```bash
yarn dev
```

### Lint

```bash
yarn lint
```

### Typecheck

```bash
yarn typecheck
```

### Build

```bash
yarn build
```

### Test

```bash
yarn test
```

View and interact with your tests via UI.

```bash
yarn test:ui
```
