// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import header from "./navigation/header";
import home from "./pages/home";
import pages from "./pages/pages";
import links from "./links";
import footer from "./navigation/footer";
import hero from "./sections/hero";
import feature from "./sections/feature";
import services from "./other/services";
import servicesList from "./sections/servicesList";
import work from "./work/work";
import workList from "./sections/workList";
import blog from "./blog/blog";
import blockContent from "./blog/blockContent";
import blogList from "./sections/blogList";
import cta from "./sections/cta";
import textListItem from "./other/textListItem";
import textList from "./sections/textList";
import contact from "./sections/contact";
import blogListTwo from "./sections/blogListTwo";
import workListTwo from "./sections/workListTwo";
import textListTwo from "./sections/textListTwo";
import TextListItemTwo from "./other/TextListItemTwo";
import HeroTwo from "./sections/HeroTwo";
import dropDown from "./sections/dropDown";
import dropDownItem from "./sections/dropDownItem";
import TextListThree from "./sections/TextListThree";
import notFound from "./pages/notFound";
import notFoundSection from "./sections/notFoundSection";
import settings from "./settings";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    header,
    footer,
    home,
    pages,
    links,
    hero,
    feature,
    servicesList,
    services,
    work,
    workList,
    blog,
    blockContent,
    blogList,
    textListItem,
    textList,
    cta,
    contact,
    blogListTwo,
    workListTwo,
    textListTwo,
    TextListItemTwo,
    HeroTwo,
    dropDown,
    dropDownItem,
    TextListThree,
    notFound,
    notFoundSection,
    settings,
  ]),
});
