const child_process = require("child_process");
const util = require("util");
const promisify = util.promisify;
const executeAsync = promisify(require("child_process").exec);
const fsExtra = require("fs-extra");
const download = require("download");
const readlineSync = require("readline-sync");
const globby = import("globby");
const inquirer = import("inquirer");
const spinnies = require("spinnies");
const which = require("which");
const chalk = import("chalk");
const xlsx = require("xlsx");
const admZip = require("adm-zip");

const Nosf = {};

/**
 * 
 * @type Function
 * @name Nosf.executeSync(command, options)
 * @param `command:String` Command to execute.
 * @param `options:Object` Options used in the execution.
 * @returns `stdout:String` The string of stdout.
 * 
 */
Nosf.executeSync = function (...args) {
  return child_process.execSync(...args).toString();
};

/**
 * 
 * @type Function
 * @name Nosf.executeAsync(command, options)
 * @param `command:String` Command to execute.
 * @param `options:Object` Options used in the execution.
 * @returns `stdout:Promise<String>` A promise with the string of stdout.
 * 
 */
Nosf.executeAsync = function (...args) {
  return executeAsync(...args).then(function (value) {
    const { stdout, stderr } = value;
    if (stderr) {
      throw stderr;
    }
    return stdout;
  });
};

/**
 * 
 * @type Function
 * @name Nosf.findFilesAsync(patterns, options)
 * @param `patterns:Array<String>`
 * @param `options:Object` 
 * @returns `results:Promise<Array<String>>`
 * 
 */
Nosf.findFilesAsync = async function (patterns, options) {
  const { globby } = Nosf;
  const usableGlobby = await globby;
  const results = await usableGlobby.globby(patterns, options);
  return results;
};

/**
 * 
 * @type Function
 * @name Nosf.dumpToExcel(file, data)
 * @param `file:String` 
 * @param `data:Array<Object>`
 * @returns `results:Promise<Object>` Returns the resulting workbook.
 * 
 */
Nosf.dumpToExcel = function (file, data) {
  const { xlsx } = Nosf;
  const worksheet = xlsx.utils.json_to_sheet(data);
  const workbook = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(workbook, worksheet, "Unique_sheet");
  xlsx.writeFile(workbook, file);
  return workbook;
};

/**
 * 
 * @name Nosf.download
 * @module require("download")
 *  
 */
Nosf.fs = fsExtra;
Nosf.fsExtra = fsExtra;

/**
 * 
 * @name Nosf.download
 * @module require("download")
 * 
 */
Nosf.download = download;

/**
 * 
 * @name Nosf.readlineSync
 * @module require("readlineSync")
 * 
 */
Nosf.readlineSync = readlineSync;

/**
 * 
 * @name Nosf.globby
 * @module require("globby")
 * 
 */
Nosf.globby = globby;

/**
 * 
 * @name Nosf.which
 * @module require("which")
 * 
 */
Nosf.which = which;

/**
 * 
 * @name Nosf.chalk
 * @module require("chalk")
 * 
 */
Nosf.chalk = chalk;

/**
 * 
 * @name Nosf.xlsx
 * @module require("xlsx")
 * 
 */
Nosf.xlsx = xlsx;

/**
 * 
 * @name Nosf.admZip
 * @module require("adm-zip")
 * 
 */
Nosf.admZip = admZip;

/**
 * 
 * @name Nosf.inquirer
 * @module require("inquirer")
 * 
 */
Nosf.inquirer = inquirer;

/**
 * 
 * @name Nosf.spinnies
 * @module require("spinnies")
 * 
 */
Nosf.spinnies = spinnies;


Nosf.load = async function() {
  try {
    
  } catch (error) {
    console.log(error);
  }
}

Nosf.default = Nosf;
module.exports = Nosf;