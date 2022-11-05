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

### PHASE_2_create nested sub-package
pnpm has a “workspaces” facility that we can use to create dependencies between packages in our monorepo. To demonstrate with the basic example, we’ll create a subpackage called A and create a dependency to it from the root package.

<br>

create `pnpm-workspaces.yaml` file
```yaml
packages:
- "packages/*"
```

setting workspaces
```
mkdir -p packages/a

cd packages/a

pnpm init
```

create `index.js` file in packages/a
```js
function getMessage() {
    return "Hello from package A";
}

module.exports = {
    getMessage,
};
```

update root `package.json` file
```json
{
  "name": "study",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "dayjs": "^1.11.6",
    "a": "workspace:*"
  }
}
```

and install
```
pnpm install
```

test sub package module in root `index.js` file
```js
const dayjs = require("dayjs");
const a = require("a");

console.log(`Today's date: ${dayjs().format()}`);
console.log(`From package a: ${a.getMessage()}`);
```

## CREATE REACT, NEXT APP

setting sub workspace
```
mkdir services

cd services
```

createe react app in sub workspace in `services`
```
pnpm create react-app [project] {--typescript}
```

createe next app in sub workspace in `services`
```
pnpm create next-app [project] {--typescript}
```

test react app
```
pnpm run start
```