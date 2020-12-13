import getFiles from "./lib/getFiles";

console.log("hello world");

(async () => {
  for await (const f of getFiles(".")) {
    console.log(f);
  }
})();
