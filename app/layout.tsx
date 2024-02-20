import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./components/Navigation/ResponsiveNav";

const sourceSansPro = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-sourceSansPro",
});

export const metadata: Metadata = {
  applicationName: "SSTrader",
  title: "SSTrader | SSTrader Metrics App",
  description:
    "Football predictions tool, mathematical models and artificial intelligence - all in one product!",
  // icons: {
  //   icon: {}
  // }
  openGraph: {},
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSansPro.variable}`}>
            <ResponsiveNav/>
            {children}
      </body>
    </html>
  );
}
