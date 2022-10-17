import React, { ReactNode } from "react";
import Header from "./Header";

type Props = {
  children?: ReactNode;
  title?: string;
  header?: any;
};
export default function Layout({ children, header }: Props) {
  return (
    <>
      <Header data={header} />
      <div className="flex flex-col h-screen">
        <main className="flex-grow">{children}</main>
      </div>
    </>
  );
}
