"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Provider } from "react-redux";
import store from "@/store/Index";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black">
      <Head>
        <title>Netflix India</title>
        <meta name="description" content={"Generated by create next app"} />
      </Head>
      <body className={inter.className}>
        <Provider store={store}>
          {children}
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
