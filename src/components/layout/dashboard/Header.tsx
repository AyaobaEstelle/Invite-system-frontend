"use client";

import { Heading } from "@/components/ui/typography/Heading";
import { Menu } from "lucide-react";
import Image from "next/image";

interface HeaderProps {
  onMenuClick: () => void;
  role: "admin" | "employee";
}

export function Header({ onMenuClick, role }: HeaderProps) {
  return (
    <header className="flex items-center justify-between h-16 bg-green-50 border-b border-green-100 px-6 shadow-sm">
      <button className="lg:hidden" onClick={onMenuClick}>
        <Menu className="w-6 h-6 text-green-700" />
      </button>

      <Heading level={2} className="capitalize mt-4">
        {role === "admin" ? "Admin Dashboard" : "Employee Dashboard"}
      </Heading>

      <div className="flex items-center space-x-4">
        <span className="text-green-700 capitalize">{role}</span>
        <div className="relative w-10 h-10 rounded-full border-2 border-green-300 overflow-hidden">
          <Image
            src="https://i.postimg.cc/T1Dy0XQk/20250925-1709-Confident-Smiling-Woman-remix-01k60t3gbzf068670vyya6aq35.png"
            alt="User Avatar"
            fill
            sizes="40px"
            className="object-cover"
          />
        </div>
      </div>
    </header>
  );
}
