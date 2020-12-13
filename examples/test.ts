import * as fs from "fs/promises";

console.log("hello world");

(async () => {
  let x = await fs.readdir(".");
  console.log(x);
})();
