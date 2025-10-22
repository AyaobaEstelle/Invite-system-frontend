"use client";

import { AuthLayout } from "@/components/admin/AuthLayout";
import { ReusableAuthForm } from "@/components/ReusableAuthForm";

export default function AdminRegister() {
  return (
    <AuthLayout
      heading="Create an Admin Account!"
      subtext="Create your account to Invite and manage employees."
      imageUrl="https://i.postimg.cc/0yb5zS7V/istockphoto-614211848-612x612.jpg"
    >
      <ReusableAuthForm type="signup" user_type="admin" />
    </AuthLayout>
  );
}
