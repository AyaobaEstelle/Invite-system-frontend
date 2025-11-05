"use client";

import { AdminRegisterForm } from "@/components/features/auth/admin/RegisterForm";
import { AuthLayout } from "@/components/layout/AuthLayout";

export default function AdminRegisterPage() {
  return (
    <AuthLayout
      heading="Create An Admin Account"
      subtext="Set up your an dmin account and start managing your team."
      imageUrl="https://i.postimg.cc/W3fGK3vc/Admin.avif"
    >
      <AdminRegisterForm />
    </AuthLayout>
  );
}
