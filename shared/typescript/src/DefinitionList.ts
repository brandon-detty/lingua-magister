import Definition, { isDefinition } from "./Definition.js";

type DefinitionList = Array<Definition>;

export const isDefinitionList = (dl: unknown): dl is DefinitionList =>
  Array.isArray(dl) && dl.reduce((isDL, d) => isDL && isDefinition(d), true);

export default DefinitionList;
