import {
  createPreviewSubscriptionHook,
  createCurrentUserHook,
} from "next-sanity";
import { config } from "./config";
import createImageUrlBuilder from "@sanity/image-url";

export const imageBuilder = createImageUrlBuilder(config);

export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source);

export const usePreviewSubscription = createPreviewSubscriptionHook(
  config as any
);

export const useCurrentUser = createCurrentUserHook(config as any);
