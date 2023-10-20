import { PropsWithChildren } from "react";

const Card = ({
  className,
  children,
}: PropsWithChildren<{ className: string }>) => {
  return (
    <>
      <div className={className}>{children}</div>;
    </>
  );
};

export default Card;
