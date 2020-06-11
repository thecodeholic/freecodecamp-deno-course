import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import Math from "./math.ts";

Deno.test("Testing Math.add function", () => {
  let sum: number;
  sum = Math.add(1, 2);
  assertEquals(sum, 3);

  sum = Math.add(-1, 2);
  assertEquals(sum, 1);

  sum = Math.add(-1, -2);
  assertEquals(sum, -3);
});
