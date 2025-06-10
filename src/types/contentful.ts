import type { Asset, Entry, EntryFields, EntrySkeletonType } from "contentful";

export interface ContentfulImage {
  file: {
    url: string;
    details?: {
      size: number;
      image?: {
        width: number;
        height: number;
      };
    };
  };
  description?: string;
}

// Field definitions
export interface ICollageFields {
  collageId: EntryFields.Integer;
  collageTitle: EntryFields.Text;
  image: Asset;
  size?: EntryFields.Text;
  serie?: EntryFields.Text;
  year?: EntryFields.Text;
}

export interface IVideoFields {
  id: EntryFields.Text;
  title: EntryFields.Text;
  description: EntryFields.Text;
  videoText?: EntryFields.Text;
  image?: Asset;
}

export interface ICVFields {
  publicCollections?: EntryFields.Text;
  publicCollectionsText?: EntryFields.Text;
  soloExhibitions?: EntryFields.Text;
  soloExhibitionsText?: EntryFields.Text;
  groupExhibitions?: EntryFields.Text;
  groupExhibitionsText?: EntryFields.Text;
  screeningsAndFilmFestivals?: EntryFields.Text;
  screeningsAndFilmFestivalsText?: EntryFields.Text;
  grants?: EntryFields.Text;
  grantsText?: EntryFields.Text;
  publications?: EntryFields.Text;
  publicationsText?: EntryFields.Text;
  educations?: EntryFields.Text;
  educationsText?: EntryFields.Text;
}

export interface IChickenFields {
  nr: EntryFields.Text;
  photo: Asset;
}

// Entry skeleton types
export interface CollageEntryType extends EntrySkeletonType {
  fields: ICollageFields;
  contentTypeId: "spiritOfVietnam";
}

export interface VideoEntryType extends EntrySkeletonType {
  fields: IVideoFields;
  contentTypeId: "video";
}

export interface CVEntryType extends EntrySkeletonType {
  fields: ICVFields;
  contentTypeId: "cv";
}

export interface ChickenEntryType extends EntrySkeletonType {
  fields: IChickenFields;
  contentTypeId: "chickens";
}

// Entry types
export type CollageEntry = Entry<CollageEntryType>;
export type VideoEntry = Entry<VideoEntryType>;
export type CVEntry = Entry<CVEntryType>;
export type ChickenEntry = Entry<ChickenEntryType>;

// Simplified types for use in components
export interface Collage {
  collageId: number;
  collageTitle: string;
  collageImage: ContentfulImage;
  size?: string;
  serie?: string;
  year?: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  videoText?: string;
  videoImage?: ContentfulImage;
}

export interface CV {
  publicCollections?: string;
  publicCollectionsText?: string;
  soloExhibitions?: string;
  soloExhibitionsText?: string;
  groupExhibitions?: string;
  groupExhibitionsText?: string;
  screeningsAndFilmFestivals?: string;
  screeningsAndFilmFestivalsText?: string;
  grants?: string;
  grantsText?: string;
  publications?: string;
  publicationsText?: string;
  educations?: string;
  educationsText?: string;
}

export interface Chicken {
  nr: string;
  photo: string;
}
