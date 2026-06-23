import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Bilal Al Ihsan's academic journey as an Information Technology student at Universitas Brawijaya, and his tech stack in Web, Mobile, and UI/UX.",
};

export default function Page() {
  return <AboutClient />;
}
