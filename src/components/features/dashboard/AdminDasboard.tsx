"use client";

import { DashboardLayout } from "@/components/layout/dashboard/Layout";
import { Link } from "@/components/ui/Link";
import { Heading } from "@/components/ui/typography/Heading";
import { Text } from "@/components/ui/typography/Text";

export function AdminDashboard() {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <Heading level={2} className="mt-4 text-green-700">
          Welcome back, Admin!
        </Heading>

        <Text size="sm" className="">
          Manage employees, invitations, and tasks efficiently.
        </Text>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/admin/employees">
            <div className="bg-white border border-green-100 p-6 rounded-2xl shadow-sm hover:shadow-md hover:bg-green-50 transition">
              <Heading level={3} className="">
                Employees
              </Heading>
              <Text size="sm" className="mt-2">
                View and manage employee information.
              </Text>
            </div>
          </Link>

          <Link href="/admin/invites">
            <div className="bg-white border border-green-100 p-6 rounded-2xl shadow-sm hover:shadow-md hover:bg-green-50 transition">
              <Heading level={3} className="">
                Invitations
              </Heading>
              <Text size="sm" className="mt-2">
                Generate and track employee onboarding invites.
              </Text>
            </div>
          </Link>

          <Link href="/admin/tasks">
            <div className="bg-white border border-green-100 p-6 rounded-2xl shadow-sm hover:shadow-md hover:bg-green-50 transition">
              <Heading level={3} className="">
                Tasks
              </Heading>
              <Text size="sm" className="mt-2">
                Assign or monitor employee onboarding tasks.
              </Text>
            </div>
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
}
