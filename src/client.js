import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import env from "react-dotenv";

export const client = sanityClient({
  projectId: "zzv02ps2",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-02-01",
  token: env.SANNITY_PROJECT_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
