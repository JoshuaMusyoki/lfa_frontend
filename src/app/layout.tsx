import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/main.css";
import { relative } from "path";
import NavBar from "@/app/ui/NavBar";
import Footer from "@/app/ui/Footer";
import { AppProps } from "next/app";
import Hero from "@/app/ui/Hero";
import Home from "./page";
import About from "./about/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lead Foundation Africa",
  description: "Better Together",
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}){
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
       <NavBar />
       {children}
       <Footer />
      </body>
    </html>
  )
}
