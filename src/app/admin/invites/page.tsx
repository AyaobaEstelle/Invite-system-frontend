"use client";

import InviteTable from "@/components/features/dashboard/InvitesTable";
import { DashboardLayout } from "@/components/layout/dashboard/Layout";
import ActionButton from "@/components/ui/ActionButton";
import Spinner from "@/components/ui/LoadingSpinner";
import { Heading } from "@/components/ui/typography/Heading";
import useAdmin from "@/hooks/useAdmin";
import useApi from "@/hooks/useApi";
import { User } from "@/types/admin.types";
import { useMutation } from "@tanstack/react-query";
import dayjs from "dayjs";
import toast from "react-hot-toast";
import { Text } from "@/components/ui/typography/Text";

export default function AdminInvitationsPage() {
  const { JOL_BASE_URL } = useApi();
  const { fetchInvitesQuery } = useAdmin();

  const headers = [
    { name: " Date Created", value: "date_joined" },
    { name: " Used", value: "used" },
    { name: " Invite Link", value: "link" },
  ];

  const invites =
    fetchInvitesQuery?.data?.invites?.map((invite: User) => ({
      ...invite,
      date_joined: dayjs(invite.createdAt).format("DD-MM-YYYY"),
      used: invite.used ? "Yes" : "No",
      link: `${window.location.origin}/employee/register/${invite?.token}`,
    })) || [];

  const handleGenerateNewInvite = useMutation({
    mutationFn: async () => {
      const { data } = await JOL_BASE_URL.post(`/invites`);
      return data;
    },
    onSuccess() {
      toast.success(" Invite link generated successfully!");
      fetchInvitesQuery.refetch();
    },
  });

  if (fetchInvitesQuery.isLoading) {
    return (
      <div className="min-h-dvh flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  const inviteLink = handleGenerateNewInvite.data?.token
    ? `${window.location.origin}/employee/register/${handleGenerateNewInvite.data?.token}`
    : null;

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <Heading level={2} className="mt-4 text-green-700">
              Invitations
            </Heading>
            <Text size="sm" className="mt-2">
              Generate new employee invitation links.
            </Text>
          </div>

          <div className="flex items-center gap-3">
            <ActionButton
              type="button"
              loading={handleGenerateNewInvite.isPending}
              onClick={handleGenerateNewInvite.mutate}
              className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all shadow-md hover:shadow-lg"
            >
              Generate Invite Link
            </ActionButton>
          </div>
        </div>

        {inviteLink && (
          <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 text-green-800 p-5 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md">
            <Text size="sm" className="font-medium mb-1">
              New Invite Link Generated:
            </Text>
            <a
              href={inviteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 underline break-all hover:text-green-800 transition"
            >
              {inviteLink}
            </a>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-md p-6 border border-green-100">
          <div className="flex items-center justify-between mb-4">
            <Heading level={3} className="font-semibold">
              All Invites
            </Heading>
            <Text size="sm" className="">
              Total: {invites.length || 0}
            </Text>
          </div>

          <InviteTable headers={headers} rows={invites} />
        </div>
      </div>
    </DashboardLayout>
  );
}
