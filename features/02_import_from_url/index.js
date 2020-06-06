// Import from URL
import {
  green,
  blue,
  bold,
  underline,
} from "https://deno.land/std/fmt/colors.ts";

console.log(`This is ${green("green")} text`);
console.log(`This is ${blue("blue")} text`);
console.log(`This is ${bold("bold")} text`);
console.log(`This is ${underline(green("underline green"))} text`);
