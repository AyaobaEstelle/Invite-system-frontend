"use client";

import { AuthForm } from "@/components/employee/AuthForm";
import { AuthLayout } from "@/components/employee/AuthLayout";

export default function EmployeeRegister() {
  return (
    <AuthLayout
      heading="Employee Registration"
      subtext="Complete your registration using the invite link provided by your admin."
      imageUrl="https://i.postimg.cc/SK1001XQ/employee-bg.jpg"
    >
      <AuthForm type="register" />
    </AuthLayout>
  );
}
