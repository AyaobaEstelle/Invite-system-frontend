"use client";

import Image from "next/image";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
  heading: string;
  subtext: string;
  imageUrl: string;
}

export function AuthLayout({
  children,
  heading,
  subtext,
  imageUrl,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdfffe] px-4">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl min-h-[85vh] bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="relative w-full lg:w-1/2 h-72 lg:h-auto flex items-end justify-center">
          <Image
            src={imageUrl}
            alt="Auth Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-green-900/60"></div>
          <div className="relative text-center text-white pb-10 px-6">
            <h2 className="text-2xl font-semibold">Welcome to Sleeky</h2>
            <hr className="my-3 mx-auto w-14 border-white/70" />
            <p className="text-base max-w-md mx-auto text-white">
              Join our team and grow together, where great work meets purpose.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center p-10 bg-white">
          <div className="w-full max-w-md mx-auto text-center lg:text-left">
            <h1 className="text-3xl font-bold text-green-900 mb-2">
              {heading}
            </h1>
            <p className="text-gray-600 text-sm mb-8">{subtext}</p>

            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
