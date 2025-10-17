"use client";

import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";

interface EmployeeHeaderProps {
  onMenuClick: () => void;
  role: "employee";
}

const EmployeeHeader = ({ onMenuClick, role }: EmployeeHeaderProps) => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    router.push("/employee/login");
  };

  return (
    <header className="flex items-center justify-between h-16 px-6 bg-white border-b border-gray-200 shadow-sm">
      <button
        className="lg:hidden text-gray-700 hover:text-gray-900"
        onClick={onMenuClick}
      >
        <Menu className="w-6 h-6" />
      </button>

      <h1 className="text-xl font-semibold text-gray-800 capitalize">
        {role} Dashboard
      </h1>

      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition"
      >
        Logout
      </button>
    </header>
  );
};

export default EmployeeHeader;
