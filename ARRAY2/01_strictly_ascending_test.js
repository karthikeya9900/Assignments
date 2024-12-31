import { assert, assertFalse } from "jsr:@std/assert";
import { isStrictlyAscending } from "./01_strictly_ascending.js";

Deno.test("should be true for empty array", () =>
  assert(isStrictlyAscending([]))
);
Deno.test("should be true for single element in array", () =>
  assert(isStrictlyAscending([1]))
);
Deno.test("should be true for two elements which are in ascending order", () =>
  assert(isStrictlyAscending([1, 2]))
);
Deno.test(
  "should be false for two elements which are in ascending order with duplication",
  () => assertFalse(isStrictlyAscending([1, 1]))
);
Deno.test("should be true for elements which are ascending order", () =>
  assert(isStrictlyAscending([1, 2, 4, 7]))
);
Deno.test(
  "should be true for elements which are ascending order with duplication",
  () => assertFalse(isStrictlyAscending([1, 2, 4, 4, 7]))
);
Deno.test(
  "should be false for elements which are not in ascending order ",
  () => assertFalse(isStrictlyAscending([1, 2, 3, 2]))
);
