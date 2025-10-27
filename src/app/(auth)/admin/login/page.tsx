"use client";

import { AdminLoginForm } from "@/components/features/auth/admin/LoginForm";
import { AuthLayout } from "@/components/layout/AuthLayout";

export default function AdminLoginPage() {
  return (
    <AuthLayout
      heading="Welcome Back Admin!"
      subtext="Log in to your dashboard and manage invites."
      imageUrl="https://i.postimg.cc/W3fGK3vc/Admin.avif"
    >
      <AdminLoginForm />
    </AuthLayout>
  );
}
