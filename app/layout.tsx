import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider, LanguageProvider } from "./providers";
import FloatingLanguageToggle from "@/components/FloatingLanguageToggle";
import GlobalLoader from "@/components/GlobalLoader";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bilalalihsan.com'),
  title: {
    template: '%s | Bilal Al Ihsan',
    default: 'Bilal Al Ihsan | Software Engineer & UI/UX Designer',
  },
  description: 'Portfolio of Bilal Al Ihsan, a Developer and Project Manager specializing in Next.js, Laravel, Flutter, and embedded systems.',
  openGraph: {
    title: 'Bilal Al Ihsan | Software Engineer',
    description: 'Portfolio of Bilal Al Ihsan, a Developer and Project Manager specializing in Next.js, Laravel, Flutter, and embedded systems.',
    url: 'https://bilalalihsan.com',
    siteName: 'Bilal Al Ihsan Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bilal Al Ihsan | Software Engineer',
    description: 'Portfolio of Bilal Al Ihsan, a Developer and Project Manager specializing in Next.js, Laravel, Flutter, and embedded systems.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} antialiased`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col font-sans transition-colors duration-300">
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          <LanguageProvider>
            <GlobalLoader />
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <FloatingLanguageToggle />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
