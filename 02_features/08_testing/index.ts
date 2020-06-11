import { delay } from "https://deno.land/std/async/delay.ts";
import {
  assertThrows,
  assertEquals,
} from "https://deno.land/std/testing/asserts.ts";

Deno.test("hello world", () => {
  const x = 1 + 2;
  if (x !== 3) {
    throw Error("x should be equal to 3");
  }
});

Deno.test("hello world with equal", () => {
  const x = 1 + 2;
  assertEquals(x, 4);
});

Deno.test("async hello world", async () => {
  const x = 1 + 2;

  // await some async task
  await delay(1000);

  if (x !== 3) {
    throw Error("x should be equal to 3");
  }
});

Deno.test("doesThrow", function (): void {
  assertThrows((): void => {
    throw new TypeError("hello world!");
  });
  assertThrows((): void => {
    throw new TypeError("hello world!");
  }, TypeError);
  assertThrows(
    (): void => {
      throw new TypeError("hello world!");
    },
    TypeError,
    "hello",
  );
});
