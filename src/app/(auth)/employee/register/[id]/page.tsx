"use client";

import { AuthLayout } from "@/components/layout/AuthLayout";
import { EmployeeRegisterForm } from "@/components/features/auth/employee/RegisterForm";
import useGetInviteCode from "@/hooks/useGetInviteCode";
import Spinner from "@/components/ui/LoadingSpinner";

export default function EmployeeRegisterPage() {
  const { invite, isLoading, isError } = useGetInviteCode();

  if (isLoading) {
    return (
      <div className="min-h-dvh flex justify-center items-center">
        <Spinner />
      </div>
    );
  }
  if (isError) {
    return (
      <div className="min-h-dvh flex justify-center items-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Invalid or Expired Link
          </h2>
          <p className="mb-4">
            The invite link you used is either invalid or has expired. Please
            contact your administrator for a new one.
          </p>
        </div>
      </div>
    );
  }

  return (
    <AuthLayout
      heading="Employee Registration"
      subtext="Complete your registration using the invite link provided by your admin."
      imageUrl="https://i.postimg.cc/FKBrfdXK/Employee-bg.avif"
    >
      <div className="my-8 text-sm text-gray-600 text-center">
        Valid Invite Code:{" "}
        <span className="font-semibold">{invite?.invite?.token}</span>
      </div>

      <EmployeeRegisterForm />
    </AuthLayout>
  );
}
