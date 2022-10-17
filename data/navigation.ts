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
