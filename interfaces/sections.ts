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
