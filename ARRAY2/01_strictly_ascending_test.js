import { assertEquals } from "jsr:@std/assert";
import { isStrictlyAscending } from "./01_strictly_ascending.js";

Deno.test("checking with [] it should be true", () =>
  assertEquals(isStrictlyAscending([]), true)
);
Deno.test("checking with [1] it shuld be true", () =>
  assertEquals(isStrictlyAscending([1]), true)
);
Deno.test("checking with [1, 2] it shuld be true", () =>
  assertEquals(isStrictlyAscending([1, 2]), true)
);
Deno.test("checking with [1, 1] it shuld be false", () =>
  assertEquals(isStrictlyAscending([1, 1]), false)
);
Deno.test("checking with [1, 2, 4, 7] it shuld be true", () =>
  assertEquals(isStrictlyAscending([1, 2, 4, 7]), true)
);
Deno.test("checking with [1, 1, 2, 3, 4] it shuld be false", () =>
  assertEquals(isStrictlyAscending([1, 1, 2, 3, 4]), false)
);
Deno.test("checking with [1, 2, 3, 2] it shuld be false", () =>
  assertEquals(isStrictlyAscending([1, 2, 3, 2]), false)
);
Deno.test("checking with [1, 2, 3, 3] it shuld be false", () =>
  assertEquals(isStrictlyAscending([1, 2, 3, 3]), false)
);
