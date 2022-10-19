export const QUERY_HOME = `
*[_type == "home" && __i18n_lang == $language] {
titleSEO,
descriptionSEO,
content[] {
      ...,
            page-> {
            "slug": slug.current
            },
            listService[]->{
                  _id,
                  title,
                  image, 
                  description,
                  btnText,
                  page-> {
                        "slug": slug.current
                        },
                }
      }
}`;
