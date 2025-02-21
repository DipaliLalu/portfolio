import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Providers } from "./providers";
import { Toaster } from "react-hot-toast";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import Eduction from "@/app/eduction/page";
import { Skills } from "@/app/skills/page";
import Services from "@/app/services/page";
import Particlesdemo from "@/app/Particlesdemo";
import Contact from "@/app/contact/page";
import Footer from "@/app/footer/page";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col gap-20 overflow-hidden">
            <Navbar />
            <main className="container mx-auto mt-14 h-auto px-6 flex-grow">
              {children}
              <Particlesdemo />
            </main>
            <Eduction />
            <Skills />
            <Services />
            <Contact />
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
