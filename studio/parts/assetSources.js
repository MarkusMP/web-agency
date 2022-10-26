import MediaAssetSource from "part:sanity-plugin-media/asset-source";
import DefaultSource from "part:@sanity/form-builder/input/image/asset-source-default";

// And the default export from this plugin
import OgImageGenerator from "sanity-plugin-asset-source-ogimage";

export default [MediaAssetSource, DefaultSource, OgImageGenerator];
