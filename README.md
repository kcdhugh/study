# DEV 에 필요한 내용 테스트 및 기록을 위하여

## PNPM SETTING 
https://blog.logrocket.com/managing-full-stack-monorepo-pnpm/

### PHASE_1_init pnpm
```
pnpm init
```

```
pnpm install dayjs
```

```js
// create index.js file for test (root dir > index.js)
const dayjs = require('dayjs');
console.log(dayjs().format());
```

### PHASE_2
