import Text, { isText } from "./Text.js";

type Library = Text[];

export const isLibrary = (l: unknown): l is Library =>
  Array.isArray(l) && l.every((v) => isText(v));

export type LibraryMap = Map<Text["id"], Text>;

export default Library;
