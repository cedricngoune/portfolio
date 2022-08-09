import React, { ReactNode } from "react";

interface IHeaderProps {
  classname: string;
  children: ReactNode;
}

function Header({ classname, children }: IHeaderProps) {
  return <div className={classname}>{children}</div>;
}
export default Header;
