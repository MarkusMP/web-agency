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
            },
            listWork[]-> {
                  image,
                  link,
                  _id
            },
            listBlog[]-> {
                  title,
                  _id,
                  slug
            }
      }
}`;

export const QUERY_PAGE = `
*[_type == "pages" && slug.current == $slug && __i18n_lang == $language] {
      titleSEO,
      descriptionSEO,
      content[] {
            ...,
            page-> {
                  "slug": slug.current
            },
            listText[]-> {
                  _id,
                  description
            },
            listBlog[]-> {
                  title,
                  _id,
                  slug,
                  description,
                  mainImage,
                  publishedAt,
            },
            listWorkTwo[]-> {
                  btnText,
                  description,
                  title,
                  image,
                  link,
                  _id,
            }
      }
}
`;
