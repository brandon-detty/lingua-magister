interface Text {
  id: number;
  title: string;
  body: string;
}

export const isText = (v: Text | Exclude<unknown, Text>): v is Text => {
  return (
    typeof v === "object" &&
    v !== null &&
    "id" in v &&
    typeof v.id === "number" &&
    "title" in v &&
    typeof v.title === "string" &&
    "body" in v &&
    typeof v.body === "string"
  );
};

export default Text;
