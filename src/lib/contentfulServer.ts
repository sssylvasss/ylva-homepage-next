import { createClient } from "contentful";

// Server-only singleton Contentful client.
// Falls back to NEXT_PUBLIC_* names to avoid host env changes; still server-side only.
const env = process.env;

const contentfulSpaceId =
  env.CONTENTFUL_SPACE_ID || env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "";

const deliveryToken =
  env.CONTENTFUL_DELIVERY_TOKEN ||
  env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN ||
  "";

// Support both correct PREVIEW_TOKEN and common typo PREVIEW_TOKE
const previewToken =
  env.CONTENTFUL_PREVIEW_TOKEN ||
  env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_TOKEN ||
  env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_TOKE ||
  "";

const rawPreview = (
  env.CONTENTFUL_IS_PREVIEW ??
  env.NEXT_PUBLIC_IS_PREVIEW ??
  "false"
)
  .toString()
  .trim()
  .toLowerCase();
const isPreview =
  rawPreview === "true" || rawPreview === "1" || rawPreview === "yes";

// eslint-disable-next-line no-console
if (!contentfulSpaceId)
  console.warn(
    "CONTENTFUL_SPACE_ID/NEXT_PUBLIC_CONTENTFUL_SPACE_ID is not set"
  );

const client = createClient({
  space: contentfulSpaceId,
  accessToken: isPreview ? previewToken : deliveryToken,
  host: isPreview ? "preview.contentful.com" : undefined,
});

// Data access helpers (stable exports)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchCollage(): Promise<any[]> {
  const entries = await client.getEntries({ content_type: "spiritOfVietnam" });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return entries.items.map((item: any) => ({
    ...item.fields,
    collageImage: item.fields.image.fields,
  }));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchCv(): Promise<any[]> {
  const entries = await client.getEntries({ content_type: "cv" });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return entries.items.map((item: any) => item.fields);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchVideo(): Promise<any[]> {
  const entries = await client.getEntries({ content_type: "video" });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return entries.items.map((item: any) => ({
    ...item.fields,
    videoImage: item.fields.videoImage.fields,
  }));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// Chickens content removed
