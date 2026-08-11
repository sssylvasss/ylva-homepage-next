import { fetchCollage } from "../../lib/contentfulServer";
import ArtClient from "./ArtClient";

export const metadata = {
  title: "Art | Ylva",
  description: "Art and collages by Ylva Landoff Lindberg",
};

export const revalidate = 3600;

export default async function ArtPage() {
  const data = await fetchCollage();
  const collages = data.sort((a, b) => a.collageId - b.collageId);
  return <ArtClient collages={collages} />;
}