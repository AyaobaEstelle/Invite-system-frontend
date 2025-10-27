"use client";

import React from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import dayjs from "dayjs";
import AdminTable from "@/components/features/dashboard/InvitesTable";
import Spinner from "@/components/ui/LoadingSpinner";
import useAdmin from "@/hooks/useAdmin";
import { User } from "@/types/admin.types";
import { DashboardLayout } from "@/components/layout/dashboard/Layout";

const Employees = () => {
  const headers = [
    { name: "Name", value: "name" },
    { name: "Email", value: "email" },
    { name: "Date Joined", value: "date_joined" },
    { name: "Role", value: "role" },
    { name: "Status", value: "status" },
  ];

  const { fetchEmployeesQuery } = useAdmin();

  const employees = fetchEmployeesQuery.data?.map((employee: User) => ({
    ...employee,
    date_joined: dayjs(employee.createdAt).format("DD-MM-YYYY"),
    status: "Active",
  }));

  if (fetchEmployeesQuery.isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <Spinner />
      </div>
    );
  }

  return (
    <DashboardLayout role="admin">
      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-3 sm:space-y-0">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Employees
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Manage and monitor all registered employees in the system.
            </p>
          </div>

          <Link
            href="/admin/invites"
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-sm w-full sm:w-auto"
          >
            <Plus size={18} />
            Add Employee
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 overflow-x-auto">
          <AdminTable headers={headers} rows={employees ?? []} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Employees;
