import React, { ReactNode } from "react";
import { IFooter, IHeader } from "../interfaces";
import dynamic from "next/dynamic";
import Header from "./Header";
const Footer = dynamic(() => import("./Footer"), { ssr: false });

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
