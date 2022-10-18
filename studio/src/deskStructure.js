import S from "@sanity/desk-tool/structure-builder";
import { RiLayoutBottom2Line, RiLayoutTop2Line } from "react-icons/ri";
import { IoDocumentsOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { BsLink45Deg } from "react-icons/bs";
import Iframe from "sanity-plugin-iframe-pane";
import resolveProductionUrl from "../resolveProductionUrl";

export const getDefaultDocumentNode = () => {
  return S.document().views([
    S.view.form(),
    S.view
      .component(Iframe)
      .options({
        url: (doc) => resolveProductionUrl(doc),
      })
      .title("Preview"),
  ]);
};

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Home Page")
        .icon(FaHome)
        .child(
          S.documentList()
            .title(`home documents`)
            .schemaType("home")
            .filter('_type == "home"')
            .canHandleIntent(S.documentTypeList("home").getCanHandleIntent())
        ),

      S.listItem()
        .title("Pages")
        .icon(IoDocumentsOutline)
        .child(
          S.list()
            .title("Pages languages filter")
            .items([
              S.listItem()
                .title("All pages")
                .child(
                  S.documentList()
                    .title(`pages documents`)
                    .schemaType("pages")
                    .filter('_type == "pages"')
                    .canHandleIntent(
                      S.documentTypeList("pages").getCanHandleIntent()
                    )
                    .child((id) =>
                      S.document()
                        .schemaType("home")
                        .documentId(id)
                        .views([
                          S.view.form(),
                          S.view
                            .component(Iframe)
                            .options({
                              url: (doc) => resolveProductionUrl(doc),
                            })
                            .title("Preview"),
                        ])
                    )
                ),
              S.listItem()
                .title("Pages in English")
                .child(
                  S.documentList()
                    .title(`pages documents`)
                    .schemaType("pages")
                    .filter('_type == "pages" && __i18n_lang == "en-us"')
                    .params({ baseLanguage: `en_US` })
                    .canHandleIntent(
                      S.documentTypeList("pages").getCanHandleIntent()
                    )
                    .child((id) =>
                      S.document()
                        .schemaType("pages")
                        .documentId(id)
                        .views([
                          S.view.form(),
                          S.view
                            .component(Iframe)
                            .options({
                              url: (doc) => resolveProductionUrl(doc),
                            })
                            .title("Preview"),
                        ])
                    )
                ),
              S.listItem()
                .title("Pages in Swedish")
                .child(
                  S.documentList()
                    .title(`pages documents`)
                    .schemaType("pages")
                    .filter('_type == "pages" && __i18n_lang == "sv-se"')
                    .params({ baseLanguage: `en_US` })
                    .canHandleIntent(
                      S.documentTypeList("pages").getCanHandleIntent()
                    )
                    .child((id) =>
                      S.document()
                        .schemaType("pages")
                        .documentId(id)
                        .views([
                          S.view.form(),
                          S.view
                            .component(Iframe)
                            .options({
                              url: (doc) => resolveProductionUrl(doc),
                            })
                            .title("Preview"),
                        ])
                    )
                ),
            ])
        ),
      S.listItem()
        .title("Links")
        .icon(BsLink45Deg)
        .child(
          S.list()
            .title("links languages filter")
            .items([
              S.listItem()
                .title("All links")
                .child(
                  S.documentList()
                    .title(`links documents`)
                    .schemaType("links")
                    .filter('_type == "links"')
                    .canHandleIntent(
                      S.documentTypeList("links").getCanHandleIntent()
                    )
                ),
              S.listItem()
                .title("links in English")
                .child(
                  S.documentList()
                    .title(`links documents`)
                    .schemaType("links")
                    .filter('_type == "links" && __i18n_lang == "en-us"')
                    .params({ baseLanguage: `en_US` })
                    .canHandleIntent(
                      S.documentTypeList("links").getCanHandleIntent()
                    )
                ),
              S.listItem()
                .title("links in Swedish")
                .child(
                  S.documentList()
                    .title(`links documents`)
                    .schemaType("links")
                    .filter('_type == "links" && __i18n_lang == "sv-se"')
                    .params({ baseLanguage: `en_US` })
                    .canHandleIntent(
                      S.documentTypeList("links").getCanHandleIntent()
                    )
                ),
            ])
        ),

      ,
      S.divider(),
      S.listItem()
        .title(`Header`)
        .icon(RiLayoutTop2Line)
        .child(
          S.documentList()
            .title(`header documents`)
            .schemaType("header")
            .filter('_type == "header"')
            .canHandleIntent(S.documentTypeList("header").getCanHandleIntent())
        ),
      S.listItem()
        .title(`Footer`)
        .icon(RiLayoutBottom2Line)
        .child(
          S.documentList()
            .title(`footer documents`)
            .schemaType("footer")
            .filter('_type == "footer"')
            .canHandleIntent(S.documentTypeList("footer").getCanHandleIntent())
        ),
    ]);
