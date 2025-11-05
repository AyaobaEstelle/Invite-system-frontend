"use client";

import Image from "next/image";
import React from "react";
import { Heading } from "../ui/typography/Heading";
import { Text } from "../ui/typography/Text";

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
            <Heading level={2} className="text-white">
              Welcome to Sleeky
            </Heading>
            <hr className="my-3 mx-auto w-14 border-white/70" />
            <Text size="base" className="max-w-md mx-auto text-white">
              Join our team and grow together, where great work meets purpose.
            </Text>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center p-10 bg-white">
          <div className="w-full max-w-md mx-auto text-center lg:text-left">
            <Heading level={2} className="mb-2">
              {heading}
            </Heading>
            <Text size="sm" className="mb-8">
              {subtext}
            </Text>

            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
