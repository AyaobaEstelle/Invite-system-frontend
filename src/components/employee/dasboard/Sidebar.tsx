"use client";

import { X, Home, User, ListChecks } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface EmployeeSidebarProps {
  open: boolean;
  onClose: () => void;
}

const EmployeeSidebar = ({ open, onClose }: EmployeeSidebarProps) => {
  const pathname = usePathname();

  const linkClasses = (path: string) =>
    `flex items-center space-x-3 p-2 rounded-md transition ${
      pathname === path ? "bg-purple-600" : "hover:bg-purple-600"
    }`;

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-purple-700 text-white transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-purple-600">
          <h2 className="text-xl font-semibold">Employee Panel</h2>
          <button className="lg:hidden" onClick={onClose}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-6 space-y-4">
          <Link
            href="/employee/dashboard"
            className={linkClasses("/employee/dashboard")}
          >
            <Home className="w-5 h-5" />
            <span>Dashboard</span>
          </Link>

          <Link
            href="/employee/profile"
            className={linkClasses("/employee/profile")}
          >
            <User className="w-5 h-5" />
            <span>Profile</span>
          </Link>

          <Link
            href="/employee/tasks"
            className={linkClasses("/employee/tasks")}
          >
            <ListChecks className="w-5 h-5" />
            <span>Tasks</span>
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default EmployeeSidebar;
