#!/usr/bin/env node

import tlds from "./index.json" with { type: "json" };

tlds.forEach((tld) => console.log(tld));
