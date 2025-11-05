"use client";

import { EmployeeLoginForm } from "@/components/features/auth/employee/LoginForm";
import { AuthLayout } from "@/components/layout/AuthLayout";

export default function EmployeeLoginPage() {
  return (
    <AuthLayout
      heading="Employee Login"
      subtext="Log in to your account to access your dashboard."
      imageUrl="https://i.postimg.cc/FKBrfdXK/Employee-bg.avif"
    >
      <EmployeeLoginForm />
    </AuthLayout>
  );
}
