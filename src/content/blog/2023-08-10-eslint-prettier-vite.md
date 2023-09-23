---
pubDate: "September 10, 2023"
title: Configuração Vite Prettier + Eslint
category: React
description: Boilerplate vite com eslint typescript prettier tailwind
---

Olá pessoal hoje me veio a necesidade de criar um projeto com vite e me deparei com a necessidade de configurar do zero o projeto então aproveitei para desenvolver um boilerplate para reutilizar outras vezes que precisar

# Libs

- SWC
- Typescript
- Eslint
- Prettier
- Tailwind css
- Jest
- React Testing Library
- Storybook

[github]()

para comecar a criacao do projeto

```bash
  pnpm create vite
```

selecione react e typescript + swc

entao vamos instalar o eslint e o prettier

# eslint + prettier

execute esse comando no terminal

```bash
  pnpm install -D eslint prettier prettier-plugin-tailwindcss @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

entao crie um arquivo ou edite o já existente do vite `.eslintrc`

```json
{
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "eslint-config-prettier"
  ],
  "settings": {
    "react": {
      "version": "detect"
    },
    "import/resolver": {
      "node": {
        "paths": ["src"],
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  "rules": {
    "no-unused-vars": [
      "error",
      {
        "vars": "all",
        "args": "after-used",
        "ignoreRestSiblings": true,
        "argsIgnorePattern": "^_"
      }
    ],
    "react/react-in-jsx-scope": "off"
  }
}
```

entao crie um arquivo chamado `.eslintignore`

```json
node_modules/
dist/
env.d.ts
```

agora para configurar o prettier crie um arquivo `.prettierrc`

```json
{
  "plugins": ["prettier-plugin-tailwindcss"],
  "trailingComma": "all",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true,
  "printWidth": 120,
  "bracketSpacing": true,
  "endOfLine": "lf"
}
```

e depois um arquivo `.prettierignore`

```json
  node_modules/
  dist/
```

agora vamos instalar o tailwind

# tailwind

```bash
  pnpm install -D tailwindcss postcss autoprefixer
```

depois vamos iniciar o tailwind

```bash
  npx tailwindcss init -p
```

abra o tailwind config e substua o content para esse abaixo

```js
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

no index css adicione isso

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

pronto vamos passar agora para o storybook

# Storybook

para instalar o storybook no vite utilize esse comando

```bash
  pnpm dlx storybook@latest init
```

selecione `S` para nao baixar as configuracoes recomendadas de eslint

entao o storybook ja vai estar configurado vamos apenas adicionar o css no nosso `preview.js ` dentro de `.storybook folder`

```js
import "../src/index.css";
```

# Jest

vamos instalar o jest

```bash
  pnpm install jest @types/jest -D
```

criar o script no package.json

```json
{
  "test": "jest"
}
```

criar o arquivo na raiz do src `src/App.spec.jsx`

```jsx
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  it("should display elements", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: /vite \+ react/i })
    ).toBeInTheDocument();
  });
});
```

agora vamos rodar o test

```bash
  pnpm test
```

# Testing Library

vamos instalar

```bash
  pnpm install @testing-library/jest-dom @testing-library/react @testing-library/user-event -D
```

para op testing library funcionar vamos instalar o babel

```bash

  pnpm i @babel/core @babel/preset-env @babel/preset-react babel-jest identity-obj-proxy jest-environment-jsdom -D
```

entao vamos criar na raiz do projeto um arquivo chamado `jest.config.js`

e entao passar essas configurações para ele

```javascript
module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/.jest/setup-tests.js"],
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/.jest/mocks/fileMock.js",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
};
```

e criar um arquivo `babel.config.js` e add isso a ele

```json
{
  "presets": [
    ["@babel/preset-env", { "targets": { "esmodules": true } }],
    ["@babel/preset-react", { "runtime": "automatic" }]
  ]
}
```

dentro da pasta `jest` criar um `setup-tests.js`

```js
import "@testing-library/jest-dom";
```

tambem criar um arquivo `fileMock.js` dentro da pasta `jest`

```js
module.exports = "test-file-stub";
```
