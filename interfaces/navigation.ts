export interface IHeader {
  logo: string;
  children: IHeaderDropDownMenuItem[];
  menu: IHeaderMenuItem[];
}

export interface IHeaderMenuItem {
  page: { slug: string };
  title: string;
  _id: string;
}

export interface IHeaderDropDownMenuItem {
  page: { slug: string };
  title: string;
  parent: { _id: string };
  _id: string;
}
