"use client";

import { DashboardLayout } from "@/components/layout/dashboard/Layout";
import useProfile from "@/hooks/useProfile";
import { User } from "lucide-react";
import { Heading } from "@/components/ui/typography/Heading";
import { Text } from "@/components/ui/typography/Text";

export default function EmployeeDashboardPage() {
  const { fetchProfile } = useProfile();
  const { data, isLoading, isError, error } = fetchProfile;

  return (
    <DashboardLayout role="employee">
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 p-6 rounded-2xl shadow-inner transition-all duration-300">
        {isLoading && (
          <Text size="lg" className="text-gray-600 text-center animate-pulse">
            Loading your profile...
          </Text>
        )}

        {isError && (
          <Text size="lg" className="text-red-600 text-center">
            Error: {(error as Error).message}
          </Text>
        )}

        {!isLoading && !isError && (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <Heading level={2} className=" tracking-tight">
                Welcome Back,{" "}
                <span className="text-green-800">
                  {data?.name?.split(" ")[0] || "Employee"}
                </span>
              </Heading>

              <Text size="sm" className="">
                Stay on top of your tasks and attendance.
              </Text>
            </div>

            <hr className="border-green-200" />

            <div className="bg-white rounded-2xl border border-green-100 shadow p-8 hover:shadow-md transition-all">
              <Heading level={3} className=" mb-6 flex items-center gap-2">
                <User className="w-5 h-5 text-green-600" /> Profile Information
              </Heading>

              <div className="flex flex-col gap-4">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <Text size="sm" className=" mb-1">
                    Full Name
                  </Text>
                  <Text size="lg" className="font-medium">
                    {data?.name || "N/A"}
                  </Text>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl">
                  <Text size="sm" className=" mb-1">
                    Email Address
                  </Text>
                  <Text size="lg" className="font-medium">
                    {data?.email || "N/A"}
                  </Text>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl">
                  <Text size="sm" className=" mb-1">
                    Employment Role
                  </Text>
                  <Text size="lg" className="font-medium capitalize">
                    {data?.role || "N/A"}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
