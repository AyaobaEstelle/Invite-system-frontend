import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import React from "react";
import { Toaster } from "react-hot-toast";
import ReactQueryProvider from "@/components/providers/ReactQueryProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sleeky Programmers",
  description: "Employee Invite System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReactQueryProvider>
          <Toaster
            toastOptions={{
              duration: 4000,
              position: "bottom-center",
            }}
          />
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
