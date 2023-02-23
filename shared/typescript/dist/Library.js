import { isText } from "./Text.js";
export const isLibrary = (l) => Array.isArray(l) && l.every((v) => isText(v));
