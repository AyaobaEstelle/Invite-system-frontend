"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  X,
  LogOut,
  LayoutDashboard,
  Users,
  Mail,
  ClipboardList,
  UserCircle,
  CalendarCheck,
} from "lucide-react";
import clsx from "clsx";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  role: "admin" | "employee";
}

export function Sidebar({ open, onClose, role }: SidebarProps) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");

    if (role === "admin") {
      router.push("/admin/login");
    } else {
      router.push("/employee/login");
    }
  };

  const links =
    role === "admin"
      ? [
          {
            href: "/admin/dashboard",
            label: "Dashboard",
            icon: LayoutDashboard,
          },
          { href: "/admin/employees", label: "Employees", icon: Users },
          { href: "/admin/invites", label: "Invitations", icon: Mail },
          { href: "/admin/tasks", label: "Tasks", icon: ClipboardList },
        ]
      : [
          {
            href: "/employee/dashboard",
            label: "Dashboard",
            icon: LayoutDashboard,
          },
          {
            href: "/employee/attendance",
            label: "Attendance",
            icon: CalendarCheck,
          },
          { href: "/employee/profile", label: "Profile", icon: UserCircle },
        ];

  return (
    <>
      <div
        className={clsx(
          "fixed inset-y-0 left-0 z-50 w-64 bg-green-800 text-white flex flex-col justify-between transform transition-transform duration-300 lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div>
          <div className="flex items-center justify-between p-6 border-b border-green-700">
            <h1 className="text-xl font-semibold">
              {role === "admin" ? "Admin Panel" : "Employee Panel"}
            </h1>
            <button onClick={onClose} className="lg:hidden">
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="p-6 space-y-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 text-green-100 hover:text-white transition"
              >
                <link.icon className="w-5 h-5" />
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="p-6 border-t border-green-700">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-red-400 hover:text-red-300 transition w-full"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black bg-opacity-40 lg:hidden"
        />
      )}
    </>
  );
}
