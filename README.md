# React-MYCreateSet

### Typescript

Если приложение на Typescript, то раскоментируйте следующие строчки в файле `.eslintrc.js` (в файлах с раширением `.js` не будут проверяться неиспользуемые переменные - 'no-unused-vars'):

```
rules: {
    // 'no-unused-vars': 'off',
    // '@typescript-eslint/no-unused-vars': 'error',
}
```

## Режимы запуска проекта:

`npm start` - запуск проекта в режиме **development** (проект открывается в браузере, отслеживаются изменения в файлах).

`npm run-script build` - запуск проекта в режиме **production**.
