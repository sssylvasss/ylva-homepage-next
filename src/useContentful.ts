import { createClient } from "contentful";
import type {
  Collage,
  Video,
  CV,
  Chicken,
  CollageEntry,
  VideoEntry,
  CVEntry,
  ChickenEntry,
} from "./types/contentful";

const useContentful = () => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
    accessToken:
      process.env.NEXT_PUBLIC_IS_PREVIEW === "true"
        ? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_TOKEN || ""
        : process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN || "",
  });

  const getCollage = async (): Promise<Collage[]> => {
    try {
      const entries = await client.getEntries<CollageEntry>({
        content_type: "spiritOfVietnam",
      });
      return entries.items.map((entry) => {
        const fields = entry.fields;
        const image = fields.image;
        return {
          collageId: Number(fields.collageId),
          collageTitle: String(fields.collageTitle),
          collageImage: {
            file: {
              url: image.fields?.file?.url || "",
              details: image.fields?.file?.details,
            },
            description: image.fields?.description,
          },
          size: fields.size,
          serie: fields.serie,
          year: fields.year,
        };
      });
    } catch (err) {
      console.log(`error fetching data: ${err}`);
      return [];
    }
  };

  const getVideo = async (): Promise<Video[]> => {
    try {
      const entries = await client.getEntries<VideoEntry>({
        content_type: "video",
      });
      return entries.items.map((entry) => {
        const fields = entry.fields;
        const image = fields.image;
        return {
          id: String(fields.id),
          title: String(fields.title),
          description: String(fields.description),
          videoText: fields.videoText,
          videoImage: image
            ? {
                file: {
                  url: image.fields?.file?.url || "",
                  details: image.fields?.file?.details,
                },
                description: image.fields?.description,
              }
            : undefined,
        };
      });
    } catch (err) {
      console.log(`error fetching data: ${err}`);
      return [];
    }
  };

  const getCv = async (): Promise<CV[]> => {
    try {
      const entries = await client.getEntries<CVEntry>({
        content_type: "cv",
      });
      return entries.items.map((entry) => {
        const fields = entry.fields;
        return {
          publicCollections: fields.publicCollections,
          publicCollectionsText: fields.publicCollectionsText,
          soloExhibitions: fields.soloExhibitions,
          soloExhibitionsText: fields.soloExhibitionsText,
          groupExhibitions: fields.groupExhibitions,
          groupExhibitionsText: fields.groupExhibitionsText,
          screeningsAndFilmFestivals: fields.screeningsAndFilmFestivals,
          screeningsAndFilmFestivalsText: fields.screeningsAndFilmFestivalsText,
          grants: fields.grants,
          grantsText: fields.grantsText,
          publications: fields.publications,
          publicationsText: fields.publicationsText,
          educations: fields.educations,
          educationsText: fields.educationsText,
        };
      });
    } catch (err) {
      console.log(`error fetching data: ${err}`);
      return [];
    }
  };

  const getChickens = async (): Promise<Chicken[]> => {
    try {
      const entries = await client.getEntries<ChickenEntry>({
        content_type: "chickens",
      });
      return entries.items.map((entry) => {
        const fields = entry.fields;
        const photo = fields.photo;
        return {
          nr: String(fields.nr),
          photo: photo.fields?.file?.url || "",
        };
      });
    } catch (err) {
      console.log(`error fetching data: ${err}`);
      return [];
    }
  };

  const getChickenById = async (id: string): Promise<Chicken | null> => {
    try {
      const query = {
        content_type: "chickens",
        "fields.nr": id,
      } as const;
      const entries = await client.getEntries<ChickenEntry>(query);
      const entry = entries.items[0];
      if (entry) {
        const fields = entry.fields;
        const photo = fields.photo;
        return {
          nr: String(fields.nr),
          photo: photo.fields?.file?.url || "",
        };
      }
      return null;
    } catch (err) {
      console.log(`error fetching data: ${err}`);
      return null;
    }
  };

  return {
    getCollage,
    getVideo,
    getCv,
    getChickens,
    getChickenById,
  };
};

export { useContentful };
