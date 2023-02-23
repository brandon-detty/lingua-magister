import { isDefinition } from "./Definition.js";
export const isDefinitionList = (dl) => Array.isArray(dl) && dl.reduce((isDL, d) => isDL && isDefinition(d), true);
