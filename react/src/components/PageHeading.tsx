import { ReactNode } from "react";

interface PageHeadingProps {
  children: ReactNode;
}
const PageHeading = ({ children }: PageHeadingProps) => {
  return <h3 className="font-bold text-xl">{children}</h3>;
};

export default PageHeading;
