import { createRequire } from "https://deno.land/std/node/module.ts";

const require = createRequire(import.meta.url);

// Moment
// const moment = require("moment");
// // in relation to release date of this post
// console.log(moment().format("MMMM Do YYYY")); // June 6th 2019
// moment("20111031", "YYYYMMDD").fromNow(); // 8 years ago
// moment().subtract(10, "days").calendar(); // 05/27/2019

// Lodash
const _ = require("lodash");
console.log(_.defaults({ a: 1 }, { a: 3, b: 2 })); // { 'a': 1, 'b': 2 }
_.partition([1, 2, 3, 4], (n: any) => n % 2); // [[1, 3], [2, 4]]

// request
const request = require("request");

request("http://www.google.com", (error: any, response: any, body: any) => {
  console.log("error:", error);
  console.log("statusCode:", response && response.statusCode);
  console.log("body:", body);
});
