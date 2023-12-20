let nosf = require(__dirname + "/../src/nosf.js");;
const { expect, assert } = require("chai");

describe("Test for NOSF", function() {
    it("can use executeSync function", function() {
        const output = nosf.executeSync("echo 'This is a request'");
        expect(output).to.equal("This is a request\n");
    });
    it("can use executeAsync function", async function() {
        const output = await nosf.executeAsync("echo 'This is a request'");
        expect(output).to.equal("This is a request\n");
    });
    it("can use findFilesAsync function", async function() {
        const output = await nosf.findFilesAsync(__dirname + "/files/file-{one,two,three}.txt");
        expect(output.length).to.equal(3);
    });
    it("can use dumpToExcel function", async function() {
        const file = __dirname + "/files/example-2.xlsx";
        try {
            nosf.fs.unlinkSync(file);
        } catch (error) {}
        const output = await nosf.dumpToExcel(file, [{
            fruit: "orange",
            color: "orange"
        }, {
            fruit: "banana",
            color: "yellow"
        }, {
            fruit: "apple",
            color: "red"
        }]);
        const exists = nosf.fs.existsSync(file);
        expect(exists).to.equal(true);
    });
    it("can use «download» package", async function() {
        const { download } = nosf;
        await download("https://www.example.com", __dirname + "/files/example.html");
        require("fs").existsSync(__dirname + "/files/example.html");
    });
    it("can use «fs-extra» package", async function() {
        const { fs } = nosf;
        const directory = __dirname + "/files/deep/inside/directory";
        const existsBefore = fs.existsSync(directory);
        expect(existsBefore).to.equal(false);
        fs.ensureDirSync(directory);
        const existsAfter = fs.existsSync(directory);
        expect(existsAfter).to.equal(true);
        fs.rmSync(__dirname + "/files/deep", { force: true, recursive: true });
    });
    it("can use «globby» package", async function() {
        let { globby } = nosf;
        globby = await globby;
        const files = globby.globbySync(__dirname + "/files/file-{one,two,three}.txt");
        expect(files.length).to.equal(3);
    });
    it("can use «which» package", function() {
        let { which } = nosf;
        const hasNode = which.sync("node", { nothrow: true });
        expect(hasNode).to.not.equal(null);
        const hasUnrealistic = which.sync("some-unrealistic-binary", { nothrow: true });
        expect(hasUnrealistic).to.equal(null);
    });
    it("can use «chalk» package", async function() {
        let { chalk } = nosf;
        chalk = await chalk;
        chalk = await new chalk.Chalk();
        console.log(chalk.red.bold("Hello in red and bold color!"));
    });
    it("can use «adm-zip» package", function() {
        this.timeout(10 * 1000);
        let { admZip } = nosf;
        const zip = new admZip();
        zip.addFile("test.txt", Buffer.from("This is some text.", "utf8"));
        zip.addLocalFile(__dirname + "/files/example.html");
        zip.addLocalFile(__dirname + "/files/file-one.txt");
        zip.addLocalFile(__dirname + "/files/file-two.txt");
        zip.addLocalFile(__dirname + "/files/file-three.txt");
        zip.addLocalFile(__dirname + "/files/file-four.txt");
        zip.writeZip(__dirname + "/files/all.zip");
    });
    it("can use «xlsx» package", function() {
        this.timeout(10 * 1000);
        let { xlsx } = nosf;
        const worksheet = xlsx.utils.json_to_sheet([{
            name: "Homer Simpson",
            age: 32
        }, {
            name: "Peter Griffin",
            age: 36
        }, {
            name: "San Goku",
            age: 27
        }]);
        const workbook = xlsx.utils.book_new();
        xlsx.utils.book_append_sheet(workbook, worksheet, "Cartoon_characters");
        xlsx.writeFile(workbook, __dirname + "/files/example.xlsx");
    });
    it("can use «readline-sync» package", function() {
        this.timeout(10 * 1000);
        let { readlineSync } = nosf;
        const answer = readlineSync.question("Are you there yet, user?");
        console.log(answer);
    });
});
