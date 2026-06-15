import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about my professional journey, academic background, and the tech stack I use to build robust applications.",
};

export default function Page() {
  return <AboutClient />;
}
