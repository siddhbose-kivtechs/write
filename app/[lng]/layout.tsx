import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { dir } from "i18next";
import { languages } from "../i18n/settings";
import NavBar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";

const inter = DM_Sans({ subsets: ["latin"] });
export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata: Metadata = {
  title: "Synapsy Write",
  description: "A new way to write text, powered by AI.",
};

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: any };
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={inter.className + " dark:bg-slate-950 dark:text-white"}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavBar lng={lng} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
