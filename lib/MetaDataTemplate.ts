import { APP } from "../App";
import type { Metadata } from "next";

export interface Data {
  meta : {
    title : string;
    desc : string;
  },
  path : string;
  image : {
    path : string,
    alt : string
  }
}

export default  function MetadataTemplate({data}: {
  data : Data;
}):Metadata {
  const url = `${APP.url}${data.path}`;
  const image = { url: `${APP.url}${data.image.path}`, alt: data.image.alt };

  return {
    title: data.meta.title,
    description: data.meta.desc,
    alternates: {
      canonical: url,
    },
    openGraph: {
      url,
      title: data.meta.title,
      images: [image],
      description: data.meta.desc,
      type: "website",
      locale: "en_AE",
      countryName: "United Arab Emirates",
      emails: ["shayanmovers.ae@gmail.com"],
      phoneNumbers: [APP.phone],
      siteName: APP.name,
    },
    twitter: {
      card: "summary_large_image",
      creator: APP.name,
      title: data.meta.title,
      description: data.meta.desc,
      images: [image],
    },
  };
}
