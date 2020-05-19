import {
  assertEquals,
  assertMatch
} from "https://deno.land/std/testing/asserts.ts";

import createId from "../services/createId.ts";

Deno.test({
  name: "it returns a ID in uuid v4 format",
  fn: () => {
    // when
    const id = createId();

    // then
    assertEquals(id.length, 36);
    assertMatch(id, /^[a-f0-9\-]+$/);
  }
});