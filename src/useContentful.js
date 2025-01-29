import { createClient } from "contentful";

export const useContentful = () => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
    accessToken:
      process.env.NEXT_PUBLIC_IS_PREVIEW === "true"
        ? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_TOKEN || ""
        : process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN || "",
  });

  const getCollage = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "spiritOfVietnam",
      });
      const filteredEntries = entries.items.map((item) => {
        const collageImage = item.fields.image.fields;
        return {
          ...item.fields,
          collageImage,
        };
      });
      return filteredEntries;
    } catch (err) {
      console.log(`error fetching data: ${err}`);
      return [];
    }
  };

  const getChickens = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "chickens",
      });
      const filteredEntries = entries.items.map((item) => {
        const { nr, photo } = item.fields;
        const photoUrl = photo ? photo.fields.file.url : null;
        return {
          nr,
          photo: photoUrl,
        };
      });
      return filteredEntries;
    } catch (err) {
      console.log(`error fetching data: ${err}`);
      return [];
    }
  };

  const getChickenById = async (id) => {
    try {
      const entries = await client.getEntries({
        content_type: "chickens",
        "fields.nr": id,
      });
      const item = entries.items[0];
      if (item) {
        const { nr, photo } = item.fields;
        const photoUrl = photo ? photo.fields.file.url : null;
        return {
          nr,
          photo: photoUrl,
        };
      }
      return null;
    } catch (err) {
      console.log(`error fetching data: ${err}`);
      return null;
    }
  };

  const getCv = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "cv",
      });
      const filteredEntries = entries.items.map((item) => {
        return {
          ...item.fields,
        };
      });
      return filteredEntries;
    } catch (err) {
      console.log(`error fetching data: ${err}`);
      return [];
    }
  };

  const getVideo = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "video",
      });
      const filteredEntries = entries.items.map((item) => {
        const videoImage = item.fields.videoImage.fields;
        return {
          ...item.fields,
          videoImage,
        };
      });
      return filteredEntries;
    } catch (err) {
      console.log(`error fetching data: ${err}`);
      return [];
    }
  };

  return { getCollage, getCv, getVideo, getChickens, getChickenById };
};