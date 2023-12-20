const child_process = require("child_process");
const util = require("util");
const promisify = util.promisify;
const executeAsync = promisify(require("child_process").exec);
const fsExtra = require("fs-extra");
const download = require("download");
const readlineSync = require("readline-sync");
const globby = import("globby");
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
Nosf.executeSync = function(...args) {
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
Nosf.executeAsync = function(...args) {
  return executeAsync(...args).then(function(value) {
    const { stdout, stderr } = value;
    if(stderr) {
      throw stderr;
    }
    return stdout;
  });
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


Nosf.default = Nosf;
module.exports = Nosf;