import
Deno.test("",([], true));
Deno.test("",([1], true));
Deno.test("",([2, 1], true));
Deno.test("",([1, 1], false));
Deno.test("",([7, 4, 2, 1], true));
Deno.test("",([6, 3, 2, 1, 1], false));
Deno.test("",([6, 3, 2, 1, 0], true));
Deno.test("",([4, 2, 2, 1], false));
Deno.test("",([4, 2, 3, 1], false));
Deno.test("",([3, 2, 1, 0], true));