import { fetchCollageById } from "../lib/contentfulServer";
import HomeClient from "./HomeClient";

export const metadata = {
  title: "Ylva Landoff Lindberg - Portfolio",
  description: "Welcome to my portfolio",
};

export const revalidate = 3600;

// The collage shown on the start page
const FEATURED_COLLAGE_ID = 51;

export default async function Home() {
  const collage = await fetchCollageById(FEATURED_COLLAGE_ID);
  return <HomeClient collage={collage} />;
}
