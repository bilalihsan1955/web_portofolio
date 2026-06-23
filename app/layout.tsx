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
  metadataBase: new URL('https://bilalalihsan.my.id'),
  title: {
    template: '%s | Bilal Al Ihsan',
    default: 'Bilal Al Ihsan | Web, Mobile & UI/UX Developer',
  },
  description: 'Portfolio of Bilal Al Ihsan, a final-year Information Technology student at Universitas Brawijaya specializing in Web Development, Mobile Apps, UI/UX Design, and IoT integration.',
  applicationName: 'Bilal Al Ihsan',
  keywords: ['Bilal Al Ihsan', 'Web Developer', 'Mobile Developer', 'UI/UX Designer', 'Frontend Developer', 'Flutter', 'Next.js', 'Universitas Brawijaya', 'Software Engineer', 'IoT', 'Programmer Vokasi'],
  authors: [{ name: 'Bilal Al Ihsan' }],
  creator: 'Bilal Al Ihsan',
  openGraph: {
    title: 'Bilal Al Ihsan | Web, Mobile & UI/UX Developer',
    description: 'Portfolio of Bilal Al Ihsan, specializing in Web Development, Mobile Apps, UI/UX Design, and IoT integration.',
    url: 'https://bilalalihsan.my.id',
    siteName: 'Bilal Al Ihsan Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bilal Al Ihsan | Web, Mobile & UI/UX Developer',
    description: 'Portfolio of Bilal Al Ihsan, specializing in Web Development, Mobile Apps, UI/UX Design, and IoT integration.',
  },
  verification: {
    google: 'aPbYfzvv-ZLdpzF7ZyxsX6CfD8k9EXtE9edm_8n9qwo',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} antialiased`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Bilal Al Ihsan",
              "url": "https://bilalalihsan.my.id"
            })
          }}
        />
      </head>
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
