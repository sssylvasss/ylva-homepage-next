import { fetchCollageById } from "../lib/contentfulServer";
import HomeClient from "./HomeClient";

export const metadata = {
  title: "Ylva Landoff Lindberg - Portfolio",
  description: "Welcome to my portfolio",
};

export const revalidate = 3600;

// The collages shown on the start page: one for wide screens, one for portrait screens
const LANDSCAPE_COLLAGE_ID = 51;
const PORTRAIT_COLLAGE_ID = 53;

export default async function Home() {
  const [landscape, portrait] = await Promise.all([
    fetchCollageById(LANDSCAPE_COLLAGE_ID),
    fetchCollageById(PORTRAIT_COLLAGE_ID),
  ]);
  return <HomeClient landscape={landscape} portrait={portrait} />;
}
