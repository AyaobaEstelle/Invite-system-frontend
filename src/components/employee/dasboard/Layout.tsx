"use client";

import { useState, useEffect } from "react";
import Header from "./Header";
import EmployeeSidebar from "./Sidebar";

interface LayoutProps {
  // eslint-disable-next-line no-undef
  children: React.ReactNode;
}

const EmployeeLayout = ({ children }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <EmployeeSidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div
        className={`flex flex-col flex-1 transition-all duration-300 ${
          sidebarOpen ? "lg:ml-64" : "ml-0"
        }`}
      >
        <Header onMenuClick={() => setSidebarOpen(true)} role="employee" />
        <main className="flex-1 p-6 bg-gray-50">{children}</main>
      </div>

      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
        />
      )}
    </div>
  );
};

export default EmployeeLayout;
