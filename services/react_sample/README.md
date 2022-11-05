# 해당 프로젝트를 통해 REACT에 관한 다양한 프로젝트를 진행할 에정

## 라이브러리
### react router dom
```
pnpm install react-router-dom
```

### recoil
```
pnpm install recoil
```

### react query
```
```

### tailwindcss
```
pnpm install tailwindcss postcss
```

```
npx tailwindcss init -p
```

setting `tailwindcss.config.js`
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

add this notation in `src/index.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```