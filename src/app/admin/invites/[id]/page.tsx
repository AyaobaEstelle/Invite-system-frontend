"use client";

import { DashboardLayout } from "@/components/layout/dashboard/Layout";
import Spinner from "@/components/ui/LoadingSpinner";
import useGetInviteCode from "@/hooks/useGetInviteCode";
import { Text } from "@/components/ui/typography/Text";
import { Heading } from "@/components/ui/typography/Heading";

export default function SingleInvitePage() {
  const { invite, isLoading, isError } = useGetInviteCode();

  if (isLoading) {
    return (
      <DashboardLayout role="admin">
        <div className="flex justify-center items-center min-h-dvh">
          <Spinner />
        </div>
      </DashboardLayout>
    );
  }

  if (isError) {
    return (
      <DashboardLayout role="admin">
        <div className="flex justify-center items-center min-h-dvh">
          <Text className="text-red-600 font-medium">
            Error: This invite link has already been used or is invalid.
          </Text>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout role="admin">
      <div className="flex justify-center items-center min-h-dvh">
        <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md text-center">
          <Heading level={4} className=" text-gray-800 mb-3">
            Invitation Active
          </Heading>
          <Text size="base" className="text-gray-600">
            This invitation link is valid and ready to use.
          </Text>
          <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-green-200 text-green-800">
            <Text>Invite Code:</Text>
            <Text size="base" className="break-all">
              {invite?.code}
            </Text>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
