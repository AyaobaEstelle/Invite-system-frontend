"use client";

import AdminTable from "@/components/AdminTable";
import Spinner from "@/components/reusables/LoadingSpinner";
import useAdmin from "@/hooks/useAdmin";
import { User } from "@/types/admin.types";
import dayjs from "dayjs";
import React from "react";

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
      <div className="min-h-dvh flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Employees</h1>
          <p className="text-gray-500 text-sm mt-1">
            Manage and monitor all registered employees in the system.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <AdminTable headers={headers} rows={employees} />
      </div>
    </div>
  );
};

export default Employees;
