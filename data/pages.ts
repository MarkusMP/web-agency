export const QUERY_HOME = `
*[_type == "home" && __i18n_lang == $language] {
      titleSEO,
      descriptionSEO,
      ogImage,
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
      ogImage,
      slug,
      content[] {
            ...,
            page-> {
                  "slug": slug.current
            },
            listText[]-> {
                  _id,
                  description
            },
            listTextTwo[]-> {
                  _id,
                  description,
                  title,
            },
            listTextThree[]-> {
                  _id,
                  description,
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

export const QUERY_BLOG = `
*[_type == "blog" && slug.current == $slug && __i18n_lang == $language] {
      _id,
      title,
      ogImage,
      mainImage,
      publishedAt,
      body,
      "slug": slug.current,
      titleSEO,
      descriptionSEO,
}
`;

export const QUERY_NOTFOUND = `*[_type == "notFound" && __i18n_lang == $language]`;
