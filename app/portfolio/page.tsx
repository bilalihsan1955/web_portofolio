import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "My Work",
  description: "Explore Bilal Al Ihsan's recent projects across Web Development, Mobile Apps, UI/UX Design, and IoT Systems.",
};

export default function Page() {
  return <PortfolioClient />;
}
