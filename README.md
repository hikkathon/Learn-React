# React + TypeScript + Vite

Этот шаблон предоставляет минимальную настройку для запуска React в Vite с поддержкой HMR и некоторыми правилами ESLint.

В настоящее время доступны два официальных плагина:

* [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) использует [Oxc](https://oxc.rs)
* [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) использует [SWC](https://swc.rs/)

## React Compiler

Компилятор React не включён в этом шаблоне из-за его влияния на производительность разработки и сборки. Чтобы добавить его, см. [эту документацию](https://react.dev/learn/react-compiler/installation).

## Расширение конфигурации ESLint

Если вы разрабатываете приложение для продакшена, рекомендуется обновить конфигурацию, чтобы включить правила линтинга с учётом типов:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Другие конфигурации...

      // Удалите tseslint.configs.recommended и замените на это
      tseslint.configs.recommendedTypeChecked,
      // Либо используйте это для более строгих правил
      tseslint.configs.strictTypeChecked,
      // Опционально добавьте это для стилистических правил
      tseslint.configs.stylisticTypeChecked,

      // Другие конфигурации...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // другие опции...
    },
  },
])
```

Вы также можете установить [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) и [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) для правил линтинга, специфичных для React:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Другие конфигурации...
      // Включить правила линтинга для React
      reactX.configs['recommended-typescript'],
      // Включить правила линтинга для React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // другие опции...
    },
  },
])
```
