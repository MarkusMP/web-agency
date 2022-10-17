import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  title?: string;
};
export default function Layout({ children }: Props) {
  return (
    <>
      <div className="flex flex-col h-screen">
        <main className="flex-grow">{children}</main>
      </div>
    </>
  );
}
