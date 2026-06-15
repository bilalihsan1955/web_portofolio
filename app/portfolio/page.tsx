import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "My Work",
  description: "Explore my recent projects across Mobile Apps, Web Development, and IoT Systems.",
};

export default function Page() {
  return <PortfolioClient />;
}
