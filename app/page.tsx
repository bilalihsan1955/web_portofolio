import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to the portfolio of Bilal Al Ihsan, a passionate Web, Mobile, and UI/UX Developer from Universitas Brawijaya. Explore my latest projects, skills, and professional journey.",
};

export default function Page() {
  return <HomeClient />;
}
