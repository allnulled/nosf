# nodejs-os-scripting-framework

The **Node.js OS Scripting Framework** is a kit of utilities and packages to write *Node.js-based scripts* for the *operative system*.

## Installation

```sh
npm install --save nodejs-os-scripting-framework
```

## Explanation

This package is a unification of some of the most used utilities in Node.js when writting scripts for the operative system. One by one, their reason to be part of this package are:

 - [adm-zip](https://www.npmjs.com/package/adm-zip): to zip and unzip files.
 - [chalk](https://www.npmjs.com/package/chalk): to print colors by console.
 - [cli-table](https://www.npmjs.com/package/cli-table): to print tables by console.
 - [download](https://www.npmjs.com/package/download): to download files from the net.
 - [fs-extra](https://www.npmjs.com/package/fs-extra): to carry complex filesystem operations easily.
 - [globby](https://www.npmjs.com/package/globby): to find files by glob patterns.
 - [inquirer](https://www.npmjs.com/package/inquirer): to have a kit of complex user inputs.
 - [readline-sync](https://www.npmjs.com/package/readline-sync): to ask user for inputs.
 - [spinnies](https://www.npmjs.com/package/spinnies): to show spinners easily.
 - [which](https://www.npmjs.com/package/which): to find executables in the system, or not.
 - [xlsx](https://www.npmjs.com/package/xlsx): to read and write Excel files.

## Dependencies

The dependencies are the following:

```js
  "adm-zip": "^0.5.10",
  "chalk": "^5.3.0",
  "download": "^8.0.0",
  "fs-extra": "^11.2.0",
  "globby": "^14.0.0",
  "inquirer": "^9.2.12",
  "readline-sync": "^1.4.10",
  "spinnies": "^0.5.1",
  "which": "^4.0.0",
  "xlsx": "^0.18.5"
```

## References

The references of the included packages are on:

 - [https://www.npmjs.com/package/adm-zip](https://www.npmjs.com/package/adm-zip)
 - [https://www.npmjs.com/package/chalk](https://www.npmjs.com/package/chalk)
 - [https://www.npmjs.com/package/cli-table](https://www.npmjs.com/package/cli-table)
 - [https://www.npmjs.com/package/download](https://www.npmjs.com/package/download)
 - [https://www.npmjs.com/package/fs-extra](https://www.npmjs.com/package/fs-extra)
 - [https://www.npmjs.com/package/globby](https://www.npmjs.com/package/globby)
 - [https://www.npmjs.com/package/inquirer](https://www.npmjs.com/package/inquirer)
 - [https://www.npmjs.com/package/readline-sync](https://www.npmjs.com/package/readline-sync)
 - [https://www.npmjs.com/package/spinnies](https://www.npmjs.com/package/spinnies)
 - [https://www.npmjs.com/package/which](https://www.npmjs.com/package/which)
 - [https://www.npmjs.com/package/xlsx](https://www.npmjs.com/package/xlsx)

## Usage

To use any of these packages, you can directly:

```js
const nosf = require("nodejs-os-scripting-framework");
await nosf.load(); // Esta línea normaliza los imports de algunos paquetes
const {
  admZip,
  chalk,
  cliTable
  download,
  fsExtra,
  globby,
  inquirer,
  readlineSync,
  spinnies,
  which,
  xlsx,
} = nosf;
```

You can find also the functions:

- `nosf.executeSync(command, options)`
- `nosf.executeAsync(command, options)`
- `await nosf.findFilesAsync(glob_pattern)`
- `await nosf.dumpToExcel(file, array_of_objects)`

## Tests

Take a look to the [`test/test.js`](./test/test.js) file to see them in action in a fast mocha test.