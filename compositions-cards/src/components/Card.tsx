import { PropsWithChildren } from "react";

const Card = ({
  className,
  style,
  children,
}: PropsWithChildren<{ className: string; style: string }>) => {
  return (
    <>
      <div className={className} style={{ width: style }}>
        {children}
      </div>
    </>
  );
};

export default Card;
