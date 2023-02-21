type Word = string;

export const isWord = (w: unknown): w is Word => typeof w === "string";

export default Word;
