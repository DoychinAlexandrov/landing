import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import { ScrollProvider } from "./context/scrollContext";

import Nav from "./components/Navigation/Nav";
import Footer from "./components/Footer";

import "./globals.css";

const sourceSansPro = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-sourceSansPro",
});

export const metadata: Metadata = {
  applicationName: "OpenAi Clone",
  title: "OpenAi Clone",
  description:
    "landing page",
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
        <script
          dangerouslySetInnerHTML={{
            __html: `history.scrollRestoration = "manual"`,
          }}
        />
        <ScrollProvider>
          <Nav/>
          {children}
          <Footer/>
        </ScrollProvider>
      </body>
    </html>
  );
}