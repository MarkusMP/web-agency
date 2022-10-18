// Header

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

// Footer

export interface IFooter {
  copyright: string;
  logo: string;
  links: string;
  services: string;
  social: IFooterSocial[];
  menu: IFooterMenu[];
  linksList: IFooterLinksList[];
}

export interface IFooterLinksList {
  _id: string;
  page: {
    slug: string;
  };
  title: string;
}

export interface IFooterMenu {
  _id: string;
  page: {
    slug: string;
  };
  title: string;
}

export interface IFooterSocial {
  _key: string;
  media: string;
  url: string;
}
