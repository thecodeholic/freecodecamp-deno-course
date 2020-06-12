import { createRequire } from "https://deno.land/std/node/module.ts";

const require = createRequire(import.meta.url);

// Moment
const moment = require("moment");
console.log(moment().format("MMMM Do YYYY"));
console.log(moment("20111031", "YYYYMMDD").fromNow());
console.log(moment().subtract(10, "days").calendar());

// Lodash
const _ = require("lodash");
console.log(_.defaults({ a: 1 }, { a: 3, b: 2 }));
console.log(_.partition([1, 2, 3, 4], (n: any) => n % 2));
