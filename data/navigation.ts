export const QUERY_HEADER = `
*[_type == "header" && __i18n_lang == $language][0] {
  children,
  logo,
  menu[]->{
    title,
    page->{"slug": slug.current},
_id
  },
  "children": *[_type == "links" && defined(parent) && __i18n_lang == $language] {
    title,
    _id,
    page->{"slug": slug.current},
parent->{_id},
    select(internal != null) => {
     
    }
  }
      }`;

export const QUERY_FOOTER = `
*[_type=="footer" && __i18n_lang == $language][0] {
  copyright,
  links,
  linksList[]-> {
    title,
    _id,
    page->{
    "slug": slug.current
   }
  },
logo,
menu[]-> {
    title,
    _id,
    page->{
    "slug": slug.current
   }
  },
services,
social[]
}
`;
