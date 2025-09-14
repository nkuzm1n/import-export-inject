# import-export-inject

Simple script that allows to add import and export statements to javascript / typescript files

## Example

import function from file and pass file path and import / export statements as array of strings to arguments

```js
import { insertImports } from './index.js'

insertImports('./targetFile.js', ["import foo from 'bar'"])
```

or

```js
import { insertExports } from './index.js'

insertExports('./targetFile.js', ["export const test = { foo: 'bar' }"])
```
