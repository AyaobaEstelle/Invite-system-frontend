"use client";

import React from "react";
import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

interface DashboardLayoutProps {
  role: "admin" | "employee";
  children: React.ReactNode;
}

export function DashboardLayout({ role, children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-green-50">
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        role={role}
      />
      <div className="flex flex-col flex-1 lg:ml-64 transition-all">
        <Header onMenuClick={() => setSidebarOpen(true)} role={role} />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
