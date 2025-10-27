"use client";

import { DashboardLayout } from "@/components/layout/dashboard/Layout";
import useProfile from "@/hooks/useProfile";
import { User, Mail } from "lucide-react";

export default function EmployeeDashboardPage() {
  const { fetchProfile } = useProfile();
  const { data, isLoading, isError, error } = fetchProfile;

  return (
    <DashboardLayout role="employee">
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 p-6 rounded-2xl shadow-inner transition-all duration-300">
        {isLoading && (
          <p className="text-gray-600 text-center text-lg animate-pulse">
            Loading your profile...
          </p>
        )}

        {isError && (
          <p className="text-red-600 text-center text-lg">
            Error: {(error as Error).message}
          </p>
        )}

        {!isLoading && !isError && (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <h2 className="text-3xl font-bold text-green-900 tracking-tight">
                Welcome Back,{" "}
                <span className="text-green-800">
                  {data?.name?.split(" ")[0] || "Employee"}
                </span>
              </h2>
              <p className="text-gray-600 text-lg">
                Stay on top of your tasks and attendance.
              </p>
            </div>

            <hr className="border-green-200" />

            <div className="bg-white rounded-2xl border border-green-100 shadow p-8 hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold text-green-800 mb-6 flex items-center gap-2">
                <User className="w-5 h-5 text-green-600" /> Profile Information
              </h3>

              <div className="flex flex-col gap-4 text-gray-700">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-500 mb-1">Full Name</p>
                  <p className="text-lg font-medium text-green-900">
                    {data?.name || "N/A"}
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-500 mb-1">Email Address</p>
                  <p className="text-lg font-medium text-green-900 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-green-600" />
                    {data?.email || "N/A"}
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-500 mb-1">Employment Role</p>
                  <p className="text-lg font-medium text-green-900 capitalize">
                    {data?.role || "N/A"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
