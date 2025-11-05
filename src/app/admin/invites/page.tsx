"use client";

import { useState } from "react";
import InviteTable from "@/components/features/dashboard/InvitesTable";
import { DashboardLayout } from "@/components/layout/dashboard/Layout";
import ActionButton from "@/components/ui/ActionButton";
import Spinner from "@/components/ui/LoadingSpinner";
import { Heading } from "@/components/ui/typography/Heading";
import { Text } from "@/components/ui/typography/Text";
import useAdmin from "@/hooks/useAdmin";
import dayjs from "dayjs";
import toast from "react-hot-toast";
import { User } from "@/types/admin.types";

export default function AdminInvitationsPage() {
  const { fetchInvitesQuery, generateInviteMutation } = useAdmin();
  const [email, setEmail] = useState("");

  const headers = [
    { name: "Employee Email", value: "email" },
    { name: "Date Created", value: "date_joined" },
    { name: "Used", value: "used" },
    { name: "Invite Link", value: "link" },
  ];

  const invites =
    fetchInvitesQuery?.data?.invites?.map((invite: User) => ({
      ...invite,
      date_joined: dayjs(invite.createdAt).format("DD-MM-YYYY"),
      used: invite.used ? "Yes" : "No",
      email: invite.email,
      link: `${
        typeof window !== "undefined" ? window.location.origin : ""
      }/employee/register/${invite.token}`,
    })) || [];

  const handleGenerateInvite = () => {
    if (!email) {
      toast.error("Please enter an email address");
      return;
    }

    generateInviteMutation.mutate(email, {
      onSuccess: () => {
        toast.success("Invite sent successfully!");
        fetchInvitesQuery.refetch();
        setEmail("");
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onError: (err: any) => {
        const message = err?.response?.data?.message || "Failed to send invite";
        toast.error(message);
      },
    });
  };

  if (fetchInvitesQuery.isLoading) {
    return (
      <div className="min-h-dvh flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <Heading level={2} className="mt-4 text-green-700">
              Invitations
            </Heading>
            <Text size="sm" className="mt-2">
              Enter an employee email to send an invitation.
            </Text>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
            <input
              type="email"
              placeholder="employee@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <ActionButton
              type="button"
              loading={generateInviteMutation.isPending}
              onClick={handleGenerateInvite}
              className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all shadow-md hover:shadow-lg"
            >
              Send Invite
            </ActionButton>
          </div>
        </div>

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
