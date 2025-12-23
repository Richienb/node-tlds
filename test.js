import assert from "node:assert";
import tlds from "./index.json" with { type: "json" };

assert(Array.isArray(tlds));
assert(tlds.length > 10);

for (const tld of tlds) {
  assert(tld);
  assert(typeof tld === "string");
}

assert(tlds.includes("com"));
assert(tlds.includes("net"));
