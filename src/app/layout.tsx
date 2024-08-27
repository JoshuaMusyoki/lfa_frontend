import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { relative } from "path";
import NavBar from "@/ui/NavBar";
import Footer from "@/ui/Footer";
import { AppProps } from "next/app";
import Hero from "@/ui/Hero";
import Home from "./hero_page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lead Foundation Africa",
  description: "Better Together",
};

export default function RootLa({
  // Component, pageProps, 
  children
// }: AppProps){
}: {
  children: React.ReactNode;
}){
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <NavBar />
        {/* <Component {...pageProps} /> */}
        {/* {children} */}
        <Home />
        <Footer />
      </body>
    </html>
  )
}
