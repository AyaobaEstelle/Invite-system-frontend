"use client";

import { Layout } from "@/components/admin/dashboard/Layout";
import Spinner from "@/components/ui/LoadingSpinner";
import useGetInviteCode from "@/hooks/useGetInviteCode";

export default function SingleInvitePage() {
  const { invite, isLoading, isError } = useGetInviteCode();

  if (isLoading) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-dvh">
          <Spinner />
        </div>
      </Layout>
    );
  }

  if (isError) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-dvh">
          <p className="text-red-600 font-medium text-lg text-center px-4">
            Error: This invite link has already been used or is invalid.
          </p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="flex justify-center items-center min-h-dvh">
        <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md text-center border border-green-100">
          <h2 className="text-xl font-semibold text-green-800 mb-3">
            Invitation Active
          </h2>
          <p className="text-gray-600">
            This invitation link is valid and ready to use.
          </p>

          <div className="mt-6 bg-green-50 p-4 rounded-lg border border-green-200 text-green-800">
            <p className="font-medium mb-1">Invite Code:</p>
            <p className="font-semibold break-all">{invite?.code}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
