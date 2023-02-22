import Language from "./Language.js";
import parseLanguageData from "./parseLanguageData.js";

test("if nl-en JSON satisfies interfaces", () => {
  expect(() => parseLanguageData("nl", "en")).not.toThrow();
});

it("should fail with non-existent language pairs", () => {
  expect(() => parseLanguageData("zz" as Language, "ee" as Language)).toThrow();
});

it("should fail with bad library JSON", () => {
  expect(() =>
    parseLanguageData("badLib" as Language, "test" as Language)
  ).toThrow();
});

it("should fail with bad dictionary JSON", () => {
  expect(() =>
    parseLanguageData("badDict" as Language, "test" as Language)
  ).toThrow();
});
