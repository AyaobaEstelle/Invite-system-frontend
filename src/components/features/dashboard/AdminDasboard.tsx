"use client";

import { DashboardLayout } from "@/components/layout/dashboard/Layout";
import Link from "next/link";

export function AdminDashboard() {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <h1 className="text-3xl font-semibold text-green-800">
          Welcome back, Admin!
        </h1>
        <p className="text-green-700">
          Manage employees, invitations, and tasks efficiently.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href={"/admin/employees"}>
            <div className="bg-white border border-green-100 p-6 rounded-2xl shadow-sm hover:shadow-md hover:bg-green-50 transition">
              <h3 className="text-lg font-semibold text-green-800">
                Employees
              </h3>
              <p className="text-green-700 mt-2">
                View and manage employee information.
              </p>
            </div>
          </Link>

          <Link href={"/admin/invites"}>
            <div className="bg-white border border-green-100 p-6 rounded-2xl shadow-sm hover:shadow-md hover:bg-green-50 transition">
              <h3 className="text-lg font-semibold text-green-800">
                Invitations
              </h3>
              <p className="text-green-700 mt-2">
                Generate and track employee onboarding invites.
              </p>
            </div>
          </Link>

          <Link href={"/admin/tasks"}>
            <div className="bg-white border border-green-100 p-6 rounded-2xl shadow-sm hover:shadow-md hover:bg-green-50 transition">
              <h3 className="text-lg font-semibold text-green-800">Tasks</h3>
              <p className="text-green-700 mt-2">
                Assign or monitor employee onboarding tasks.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
}
