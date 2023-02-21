type Definition = string;

export const isDefinition = (d: unknown): d is Definition =>
  typeof d === "string";

export default Definition;
