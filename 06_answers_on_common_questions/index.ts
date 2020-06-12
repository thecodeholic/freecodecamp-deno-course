import date from "http://127.0.0.1:4507/library.ts";

Deno.writeTextFile(`date.txt`, `Current Date is: ${date()}`);
