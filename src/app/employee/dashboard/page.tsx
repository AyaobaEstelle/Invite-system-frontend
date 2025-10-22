"use client";

import EmployeeLayout from "@/components/employee/dasboard/Layout";
import useProfile from "@/hooks/useProfile";

export default function EmployeeDashboardPage() {
  const { fetchProfile } = useProfile();
  const { data, isLoading, isError, error } = fetchProfile;

  return (
    <EmployeeLayout>
      <div className="bg-white rounded-lg shadow p-6 lg:ml-64 transition-all duration-300">
        {isLoading && (
          <p className="text-gray-600 text-center">Loading your profile...</p>
        )}

        {isError && (
          <p className="text-red-600 text-center">
            Error: {(error as Error).message}
          </p>
        )}

        {!isLoading && !isError && (
          <>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Welcome Back, {data?.name?.split(" ")[0] || "Employee"}
            </h2>

            <p className="text-gray-600 mb-6">
              This is your employee dashboard. You can view your tasks and
              attendance information here.
            </p>

            <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">
                Profile Information
              </h3>

              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Name:</strong> {data?.name || "N/A"}
                </p>
                <p>
                  <strong>Email:</strong> {data?.email || "N/A"}
                </p>
                <p>
                  <strong>Role:</strong>{" "}
                  <span className="capitalize">{data?.role || "N/A"}</span>
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </EmployeeLayout>
  );
}
