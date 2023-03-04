import Spinner from "./Spinner";

const cn = [
  "z-50",
  "absolute top-0 left-0 w-full h-full",
  "flex justify-center items-center",
  "bg-black bg-opacity-20",
].join(" ");

const Loading = () => {
  return (
    <div className={cn}>
      <Spinner />
    </div>
  );
};

export default Loading;
