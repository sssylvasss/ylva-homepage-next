import { createClient } from "contentful";

export const useContentful = () => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
    accessToken:
      process.env.NEXT_PUBLIC_IS_PREVIEW === "true"
        ? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_TOKEN || ""
        : process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN || "",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getCollage = async (): Promise<any[]> => {
    try {
      const entries = await client.getEntries({
        content_type: "spiritOfVietnam",
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return entries.items.map((item: any) => ({
        ...item.fields,
        collageImage: item.fields.image.fields,
      }));
    } catch (err) {
      console.log(`error fetching data: ${err}`);
      return [];
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getChickens = async (): Promise<any[]> => {
    try {
      const entries = await client.getEntries({
        content_type: "chickens",
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return entries.items.map((item: any) => ({
        nr: String(item.fields.nr),
        photo: item.fields.photo?.fields?.file?.url ?? null,
      }));
    } catch (err) {
      console.log(`error fetching data: ${err}`);
      return [];
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getChickenById = async (id: string): Promise<any | null> => {
    try {
      const entries = await client.getEntries({
        content_type: "chickens",
        "fields.nr": id,
      });
      if (entries.items.length === 0) return null;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const item: any = entries.items[0];
      return {
        nr: String(item.fields.nr),
        photo: item.fields.photo?.fields?.file?.url ?? null,
      };
    } catch (err) {
      console.log(`error fetching data: ${err}`);
      return null;
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getCv = async (): Promise<any[]> => {
    try {
      const entries = await client.getEntries({
        content_type: "cv",
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return entries.items.map((item: any) => item.fields);
    } catch (err) {
      console.log(`error fetching data: ${err}`);
      return [];
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getVideo = async (): Promise<any[]> => {
    try {
      const entries = await client.getEntries({
        content_type: "video",
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return entries.items.map((item: any) => ({
        ...item.fields,
        videoImage: item.fields.videoImage.fields,
      }));
    } catch (err) {
      console.log(`error fetching data: ${err}`);
      return [];
    }
  };

  return { getCollage, getCv, getVideo, getChickens, getChickenById };
};
