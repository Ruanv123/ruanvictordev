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
- Vitest
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
  pnpm dlx sb init --builder @storybook/builder-vite
```

selecione `N` para nao baixar as configuracoes recomendadas de eslint
