import { Metadata } from "next";
import {
  defaultDescription,
  defaultTitle,
  myName,
  myTitle,
} from "./constant";
import { homepageUrl, siteUrl } from "./url";

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s",
    default: defaultTitle,
  },
  description: defaultDescription,
  generator: myTitle,
  applicationName: myTitle,
  authors: [
    {
      name: myName,
      url: homepageUrl,
    },
  ],
  creator: myTitle,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  appLinks: {
    web: {
      url: homepageUrl,
      should_fallback: true,
    },
  },
};
