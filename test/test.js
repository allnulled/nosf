const child_process = require("child_process");
const { expect, assert } = require("chai");
let nosf = undefined;

describe("Test for NOSF", function() {
    it("can load itself", function() {
        nosf = require(__dirname + "/../src/nosf.js");
        expect(typeof nosf).to.equal("object");
    });
    it("can execute commands sync and get the output", function() {
        const output = nosf.executeSync("echo 'This is a request'");
        expect(output).to.equal("This is a request\n");
    });
    it("can execute commands async and get the output", async function() {
        const output = await nosf.executeAsync("echo 'This is a request'");
        expect(output).to.equal("This is a request\n");
    });
});
