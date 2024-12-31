import { assert, assertFalse } from "jsr:@std/assert";
import { isStrictlyDescending } from "./02_strictly_descending.js";

Deno.test("empty array it should be true", () =>
  assert(isStrictlyDescending([]))
);
Deno.test("single element it should be true", () =>
  assert(isStrictlyDescending([1]))
);
Deno.test("two elements which are in descending order it should be true", () =>
  assertEquals(isStrictlyDescending([2, 1]), true)
);
Deno.test("checking with [1, 1] it shuld be false", () =>
  assertEquals(isStrictlyDescending([1, 1]), false)
);
Deno.test("checking with [7, 4, 2, 1] it shuld be true", () =>
  assertEquals(isStrictlyDescending([7, 4, 2, 1]), true)
);
Deno.test("checking with [6, 3, 2, 1, 1] it shuld be false", () =>
  assertEquals(isStrictlyDescending([6, 3, 2, 1, 1]), false)
);
Deno.test("checking with [6, 3, 2, 1, 0] it shuld be false", () =>
  assertEquals(isStrictlyDescending([6, 3, 2, 1, 0]), false)
);
Deno.test("checking with [4, 2, 3, 1] it shuld be false", () =>
  assertEquals(isStrictlyDescending([4, 2, 3, 1]), false)
);

Deno.test("checking with [4, 2, 2, 1] it shuld be false", () =>
  assertEquals(isStrictlyDescending([4, 2, 2, 1]), false)
);

Deno.test("checking with [3, 2, 1, 0] it shuld be false", () =>
  assertEquals(isStrictlyDescending([3, 2, 1, 0]), false)
);
