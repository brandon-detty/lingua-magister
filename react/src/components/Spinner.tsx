// tailwind-only spinner inspired by
//   https://tailwind-elements.com/docs/standard/components/spinners/

const cn = [
  "inline-block h-6 w-6",
  "animate-spin",
  "rounded-full border-4 border-solid border-gray-500",
  // clips a section of the circle
  "border-r-transparent",
].join(" ");

const Spinner = () => <div className={cn} />;

export default Spinner;
