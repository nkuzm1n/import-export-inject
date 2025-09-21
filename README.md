# import-export-inject

Simple script that allows to add import and export statements to javascript / typescript files.

## Example

import function from file and pass file path and import / export statements as array of strings to arguments

### Add import statements

```js
import { insertImports } from './index.js'

insertImports('./targetFile.js', ["import foo from 'bar'"])
```

before

```js
import bar from 'foo'

// ...some code

export const num = 42
```

after

```js
import bar from 'foo'
import foo from 'bar'

// ...some code

export const num = 42
```

### Add export statements

```js
import { insertExports } from './index.js'

insertExports('./targetFile.js', ["export const test = { foo: 'bar' }"])
```

before

```js
import foo from 'bar'

// ...some code

export const obj = { num: 42 }
```

after

```js
import foo from 'bar'

// ...some code

export const obj = { num: 42 }
export const test = { foo: 'bar' }
```
