import { toUnicode as decodePunycode } from "punycode/punycode.es6.js";
import { promises as fs } from "node:fs";

const response = await fetch(
  "https://data.iana.org/TLD/tlds-alpha-by-domain.txt",
);
const body = await response.text();

const data = body
  .split("\n")
  .filter((item) => !item.startsWith("#") && item.trim() !== "")
  .map((item) =>
    item.startsWith("XN--") ? decodePunycode(item.toLowerCase()) : item,
  )
  .map((item) => item.toLowerCase())
  .sort();

await fs.writeFile("index.json", JSON.stringify(data, null, 2));
console.log(`Saved ${data.length} TLDs!`);
