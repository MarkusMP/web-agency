export const QUERY_HOME = `
*[_type == "home" && __i18n_lang == $language] {
titleSEO,
descriptionSEO
      }`;
