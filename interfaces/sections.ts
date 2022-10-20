export interface IHero {
  title: string;
  description: string;
}

export interface IFeature {
  btnText: string;
  description: string;
  image: {
    _type: string;
    alt: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  page: {
    slug: string;
  };
  title: string;
  _key: string;
  _type: string;
}

export interface IServicesList {
  title: string;
  _key: string;
  _type: string;
  listService: IServiceListItem[];
}

export interface IServiceListItem {
  btnText: string;
  description: string;
  title: string;
  _id: string;
  image: {
    _type: string;
    alt: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  page: {
    slug: string;
  };
}

export interface IWorkList {
  btnText: string;
  page: {
    slug: string;
  };
  title: string;
  _key: string;
  _type: string;
  listWork: IWorkItem[];
}

export interface IWorkItem {
  btnText: string;
  description: string;
  link: string;
  title: string;
  _id: string;
  image: {
    _type: string;
    alt: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
}

export interface IBlogList {
  btnText: string;
  title: string;
  listLinkTitle: string;
  _key: string;
  _type: string;
  page: {
    slug: string;
  };
  listBlog: IBlogListItems[];
}

export interface IBlogListItems {
  slug: {
    _type: string;
    current: string;
  };
  _id: string;
  title: string;
}

export interface ICta {
  title: string;
  description: string;
  btnText: string;
  _key: string;
  _type: string;
  page: {
    slug: string;
  };
}
