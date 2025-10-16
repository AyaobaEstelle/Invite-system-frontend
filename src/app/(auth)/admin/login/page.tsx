"use client";

import { AuthForm } from "@/components/admin/AuthForm";
import { AuthLayout } from "@/components/admin/AuthLayout";

export default function LoginPage() {
  return (
    <AuthLayout
      heading="Welcome Back Admin!"
      subtext="Log in to your dashboard and manage invites."
      imageUrl="https://i.postimg.cc/0yb5zS7V/istockphoto-614211848-612x612.jpg"
    >
      <AuthForm type="login" />
    </AuthLayout>
  );
}
