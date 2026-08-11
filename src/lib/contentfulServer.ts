import { createClient, EntryFieldTypes } from "contentful";
import type { Asset, AssetFields, Entry, UnresolvedLink } from "contentful";

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

// Content type shapes, following Contentful's recommended EntrySkeleton
// pattern: https://github.com/contentful/contentful.js/blob/master/TYPESCRIPT.md
type CollageEntrySkeleton = {
  contentTypeId: "spiritOfVietnam";
  fields: {
    collageId: EntryFieldTypes.Integer;
    collageTitle: EntryFieldTypes.Text;
    serie?: EntryFieldTypes.Text;
    size?: EntryFieldTypes.Text;
    year?: EntryFieldTypes.Text;
    image: EntryFieldTypes.AssetLink;
  };
};

type CvEntrySkeleton = {
  contentTypeId: "cv";
  fields: {
    publicCollections: EntryFieldTypes.Text;
    publicCollectionsText: EntryFieldTypes.Text;
    soloExhibitions: EntryFieldTypes.Text;
    soloExhibitionsText: EntryFieldTypes.Text;
    groupExhibitions: EntryFieldTypes.Text;
    groupExhibitionsText: EntryFieldTypes.Text;
    screeningsAndFilmFestivals: EntryFieldTypes.Text;
    screeningsAndFilmFestivalsText: EntryFieldTypes.Text;
    grants: EntryFieldTypes.Text;
    grantsText: EntryFieldTypes.Text;
    publications: EntryFieldTypes.Text;
    publicationsText: EntryFieldTypes.Text;
    educations: EntryFieldTypes.Text;
    educationsText: EntryFieldTypes.Text;
  };
};

type VideoEntrySkeleton = {
  contentTypeId: "video";
  fields: {
    id: EntryFieldTypes.Text;
    title: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
    videoText?: EntryFieldTypes.Text;
    videoImage: EntryFieldTypes.AssetLink;
  };
};

// Shapes returned to the app, after collapsing the resolved Asset link
// down to its fields (mirrors the old runtime behaviour of `.fields.image.fields`).
export interface Collage {
  collageId: number;
  collageTitle: string;
  serie?: string;
  size?: string;
  year?: string;
  collageImage: AssetFields;
}

export type Cv = Entry<CvEntrySkeleton, undefined>["fields"];

export interface Video {
  id: string;
  title: string;
  description: string;
  videoText?: string;
  videoImage: AssetFields;
}

// AssetLink fields resolve to the linked Asset, unless it was deleted or
// unpublished, in which case Contentful leaves an UnresolvedLink instead.
function resolveAssetFields(
  asset: Asset<undefined, string> | UnresolvedLink<"Asset"> | undefined
): AssetFields {
  return asset && "fields" in asset ? asset.fields : {};
}

export async function fetchCollage(): Promise<Collage[]> {
  const entries = await client.getEntries<CollageEntrySkeleton>({
    content_type: "spiritOfVietnam",
  });
  return entries.items.map((item) => ({
    ...item.fields,
    collageImage: resolveAssetFields(item.fields.image),
  }));
}

export async function fetchCv(): Promise<Cv[]> {
  const entries = await client.getEntries<CvEntrySkeleton>({
    content_type: "cv",
  });
  return entries.items.map((item) => item.fields);
}

export async function fetchVideo(): Promise<Video[]> {
  const entries = await client.getEntries<VideoEntrySkeleton>({
    content_type: "video",
  });
  return entries.items.map((item) => ({
    ...item.fields,
    videoImage: resolveAssetFields(item.fields.videoImage),
  }));
}
