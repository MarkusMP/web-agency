import React, { ReactNode } from "react";
import { IFooter, IHeader } from "../interfaces";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children?: ReactNode;
  title?: string;
  header?: IHeader;
  footer?: IFooter;
};
export default function Layout({ children, header, footer }: Props) {
  return (
    <>
      <Header data={header} />
      <div className="flex flex-col">
        <main className="flex-grow">{children}</main>
      </div>
      <Footer data={footer} />
    </>
  );
}
