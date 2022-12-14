import S from "@sanity/desk-tool/structure-builder";
import { RiLayoutBottom2Line, RiLayoutTop2Line } from "react-icons/ri";
import { IoDocumentsOutline, IoDocumentTextOutline } from "react-icons/io5";
import { FaCog, FaHome } from "react-icons/fa";
import { BsLink45Deg } from "react-icons/bs";
import Iframe from "sanity-plugin-iframe-pane";
import resolveProductionUrl from "../resolveProductionUrl";
import { BsBoxSeam, BsExclamationCircle } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";

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
        .title("404 Page")
        .icon(IoDocumentsOutline)
        .child(
          S.list()
            .title("404 Page languages filter")
            .items([
              S.listItem()
                .title("All 404 Pages")
                .child(
                  S.documentList()
                    .title(`404 page documents`)
                    .schemaType("notFound")
                    .filter('_type == "notFound"')
                    .canHandleIntent(
                      S.documentTypeList("notFound").getCanHandleIntent()
                    )
                    .child((id) =>
                      S.document()
                        .schemaType("notFound")
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
                .title("404 page in English")
                .child(
                  S.documentList()
                    .title(`404 page documents`)
                    .schemaType("notFound")
                    .filter('_type == "notFound" && __i18n_lang == "en-us"')
                    .params({ baseLanguage: `en_US` })
                    .canHandleIntent(
                      S.documentTypeList("notFound").getCanHandleIntent()
                    )
                    .child((id) =>
                      S.document()
                        .schemaType("notFound")
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
                .title("404 page in Swedish")
                .child(
                  S.documentList()
                    .title(`notFound documents`)
                    .schemaType("notFound")
                    .filter('_type == "notFound" && __i18n_lang == "sv-se"')
                    .params({ baseLanguage: `en_US` })
                    .canHandleIntent(
                      S.documentTypeList("notFound").getCanHandleIntent()
                    )
                    .child((id) =>
                      S.document()
                        .schemaType("notFound")
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
      S.divider(),

      S.listItem()
        .title("blog")
        .icon(IoDocumentTextOutline)
        .child(
          S.list()
            .title("blog languages filter")
            .items([
              S.listItem()
                .title("All blog")
                .child(
                  S.documentList()
                    .title(`blog documents`)
                    .schemaType("blog")
                    .filter('_type == "blog"')
                    .canHandleIntent(
                      S.documentTypeList("blog").getCanHandleIntent()
                    )
                ),
              S.listItem()
                .title("blog in English")
                .child(
                  S.documentList()
                    .title(`blog documents`)
                    .schemaType("blog")
                    .filter('_type == "blog" && __i18n_lang == "en-us"')
                    .params({ baseLanguage: `en_US` })
                    .canHandleIntent(
                      S.documentTypeList("blog").getCanHandleIntent()
                    )
                ),
              S.listItem()
                .title("blog in Swedish")
                .child(
                  S.documentList()
                    .title(`blog documents`)
                    .schemaType("blog")
                    .filter('_type == "blog" && __i18n_lang == "sv-se"')
                    .params({ baseLanguage: `en_US` })
                    .canHandleIntent(
                      S.documentTypeList("blog").getCanHandleIntent()
                    )
                ),
            ])
        ),
      S.divider(),
      S.listItem()
        .title("work")
        .icon(MdWorkOutline)
        .child(
          S.list()
            .title("work languages filter")
            .items([
              S.listItem()
                .title("All work")
                .child(
                  S.documentList()
                    .title(`work documents`)
                    .schemaType("work")
                    .filter('_type == "work"')
                    .canHandleIntent(
                      S.documentTypeList("work").getCanHandleIntent()
                    )
                ),
              S.listItem()
                .title("work in English")
                .child(
                  S.documentList()
                    .title(`work documents`)
                    .schemaType("work")
                    .filter('_type == "work" && __i18n_lang == "en-us"')
                    .params({ baseLanguage: `en_US` })
                    .canHandleIntent(
                      S.documentTypeList("work").getCanHandleIntent()
                    )
                ),
              S.listItem()
                .title("work in Swedish")
                .child(
                  S.documentList()
                    .title(`work documents`)
                    .schemaType("work")
                    .filter('_type == "work" && __i18n_lang == "sv-se"')
                    .params({ baseLanguage: `en_US` })
                    .canHandleIntent(
                      S.documentTypeList("work").getCanHandleIntent()
                    )
                ),
            ])
        ),
      S.listItem()
        .title("Services")
        .icon(BsBoxSeam)
        .child(
          S.list()
            .title("Services languages filter")
            .items([
              S.listItem()
                .title("All services")
                .child(
                  S.documentList()
                    .title(`services documents`)
                    .schemaType("services")
                    .filter('_type == "services"')
                    .canHandleIntent(
                      S.documentTypeList("services").getCanHandleIntent()
                    )
                ),
              S.listItem()
                .title("Services in English")
                .child(
                  S.documentList()
                    .title(`services documents`)
                    .schemaType("services")
                    .filter('_type == "services" && __i18n_lang == "en-us"')
                    .params({ baseLanguage: `en_US` })
                    .canHandleIntent(
                      S.documentTypeList("services").getCanHandleIntent()
                    )
                ),
              S.listItem()
                .title("Services in Swedish")
                .child(
                  S.documentList()
                    .title(`services documents`)
                    .schemaType("services")
                    .filter('_type == "services" && __i18n_lang == "sv-se"')
                    .params({ baseLanguage: `en_US` })
                    .canHandleIntent(
                      S.documentTypeList("services").getCanHandleIntent()
                    )
                ),
            ])
        ),
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
      S.listItem()
        .title("Site Settings")
        .icon(FaCog)
        .child(S.document().schemaType("settings").documentId("settings")),
    ]);
