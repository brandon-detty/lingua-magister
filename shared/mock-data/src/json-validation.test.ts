import validatedLangDataFromJson from "./validatedLangDataFromJson.js";

import nlEnDict from "./nl-en/dictionary.json";
import nlEnLib from "./nl-en/library.json";
import badDict from "./bad-test-json/badDictionary.json";
import badLib from "./bad-test-json/badLibrary.json";

test("if nl-en JSON satisfies interfaces", () => {
  expect(() => validatedLangDataFromJson(nlEnDict, nlEnLib)).not.toThrow();
});

it("should fail with bad library JSON", () => {
  expect(() => validatedLangDataFromJson(nlEnDict, badLib)).toThrow();
});

it("should fail with bad dictionary JSON", () => {
  expect(() => validatedLangDataFromJson(badDict, nlEnLib)).toThrow();
});
