import "./globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} mx-32 my-12  max-w-[1440px]`}>
        {children}
      </body>
    </html>
  );
}
