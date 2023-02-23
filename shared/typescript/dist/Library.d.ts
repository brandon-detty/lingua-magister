import Text from "./Text.js";
type Library = Text[];
export declare const isLibrary: (l: unknown) => l is Library;
export type LibraryMap = Map<Text["id"], Text>;
export default Library;
