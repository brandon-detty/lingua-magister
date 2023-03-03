import { Word as WordType } from "@lingua-magister/types";

interface WordProps {
  word: WordType;
}

const Word = ({ word }: WordProps) => {
  return <span>{word}</span>;
};

export default Word;
