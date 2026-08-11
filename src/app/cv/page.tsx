import { fetchCv } from "../../lib/contentfulServer";
import CVClient from "./CVClient";

export const metadata = {
  title: "CV | Ylva",
  description: "Professional background and experience of Ylva Landoff Lindberg",
};

export const revalidate = 3600;

export default async function CVPage() {
  const cv = await fetchCv();
  return <CVClient cv={cv} />;
}
