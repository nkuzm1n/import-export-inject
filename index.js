import fs from 'node:fs/promises'

/**
 * @param {string} path - path to file
 */
async function readFile(path) {
  return await fs.readFile(path, { encoding: 'utf-8' })
}

/**
 * @param {string} path - path to file
 * @param {string} content - file content
 */
async function writeFile(path, content) {
  return await fs.writeFile(path, content, { encoding: 'utf8' })
}

/**
 * @param {string[]} lines - string lines
 * @param {RegExp} regExp - reg exp to check each line for match
 * @returns {number[]}
 */
function findMatchedLineIndices(lines, regExp) {
  const lineIndices = []

  for (let index = 0; index < lines.length; index++) {
    const line = lines[index].trim()
    if (regExp.test(line)) {
      lineIndices.push(index)
    }
  }

  return lineIndices
}

/**
 * @param {string} filePath - path to file
 * @param {string[]} imports - import statements to insert
 */
async function insertImports(filePath, imports) {
  if (!filePath) {
    console.log('No file path passed')
    return
  }

  if (!imports.length) {
    console.log('No imports to insert')
    return
  }

  const fileContent = await readFile(filePath)
  const lines = fileContent.split('\n')
  const regExp = new RegExp(/^import(\s|\{)+/)

  const matches = findMatchedLineIndices(lines, regExp)

  const insertIndex = matches.length > 0 ? matches[matches.length - 1] + 1 : 0
  lines.splice(insertIndex, 0, ...imports)

  await writeFile(filePath, lines.join('\n'))
}

/**
 * @param {string} filePath - path to file
 * @param {string[]} exports - exports statements to insert
 */
async function insertExports(filePath, exports) {
  if (!filePath) {
    console.log('No file path passed')
    return
  }

  if (!exports.length) {
    console.log('No exports to insert')
    return
  }

  const fileContent = await readFile(filePath)
  const lines = fileContent.split('\n')

  lines.push(...exports)

  await writeFile(filePath, lines.join('\n'))
}

export { insertImports, insertExports }
