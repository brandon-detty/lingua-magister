import { Word as WordType } from "@lingua-magister/types";
import { MouseEventHandler } from "react";

interface WordProps {
  handleClick: MouseEventHandler<HTMLSpanElement>;
  word: WordType;
}

const isTranslatable = (w: string) => w.match(/\w/) !== null;

const Word = ({ handleClick, word }: WordProps) => {
  return isTranslatable(word) ? (
    <span onClick={handleClick}>{word}</span>
  ) : (
    <>{word}</>
  );
};

export default Word;
