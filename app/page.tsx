import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to my portfolio. I build scalable Web, Mobile, and IoT solutions.",
};

export default function Page() {
  return <HomeClient />;
}
