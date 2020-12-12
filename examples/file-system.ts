import * as path from "path";
import * as fs from "fs/promises";
import getFiles from "./lib/getFiles";

async function readAndWriteFile() {
  let fileBody = await fs.readFile("./fixtures/biostats.csv");
  console.log("File body biostats.csv:");
  console.log(fileBody.toString());

  let onlyWomen = fileBody
    .toString()
    .split("\n")
    .filter((__) => __.includes(`"F",`))
    .join("\n");

  console.log("Only women: ");
  console.log(onlyWomen);

  await fs.writeFile("./fixtures/biostats_only_women.csv", onlyWomen);

  console.log("\n\n");
  console.log("Write file success: ", "./fixtures/biostats_only_women.csv");
}

async function readDir() {
  const files = await fs.readdir("./fixtures");
  console.log(files);
  console.log("Size:", files.length);
  console.log("");

  for (const file of files) {
    let filePath = path.join("./fixtures", file);
    let fileStat = await fs.stat(filePath);
    if (fileStat.isFile()) {
      console.log(file, "— isFile");
    }
    if (fileStat.isDirectory()) {
      console.log(file, "— isDirectory");
    }
  }
}

async function dirReadRecursive() {
  for await (const f of getFiles(".")) {
    console.log(f);
  }
}

(async () => {
  await readAndWriteFile();
  console.log("");
  await readDir();
  console.log("");
  await dirReadRecursive();
})();
