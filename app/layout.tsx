import type { Metadata } from "next";
import { Bebas_Neue, Inter, Poppins, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

/*
  The comps are set in Neutraface Text, which is a licensed House Industries
  face and can't be served from here. Poppins is the closest geometric sans
  available on Google Fonts, and `--font-display` lists Neutraface first so
  anyone with the real licence picks it up automatically.
*/
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-neutraface",
});

export const metadata: Metadata = {
  title: "Javascript Community India",
  description:
    "Javascript Pune is now in Mumbai. Meet the team, browse the gallery, and snag the details.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${roboto.variable} ${bebas.variable} ${poppins.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
