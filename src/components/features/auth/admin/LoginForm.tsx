"use client";

import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import FormField from "@/components/form/FormField";
import Button from "@/components/ui/Button";

export function AdminLoginForm() {
  const { loginAdminControl, handleSubmitForm, loginOrRegisterMutation } =
    useAuth("login", "admin");

  return (
    <form
      className="w-full max-w-md bg-white p-6 rounded-xl shadow-sm"
      onSubmit={loginAdminControl.handleSubmit(handleSubmitForm)}
      noValidate
    >
      <div className="space-y-4">
        <FormField
          control={loginAdminControl.control}
          name="email"
          title="Email Address"
          isImportant
          placeholder="you@example.com"
        />

        <FormField
          control={loginAdminControl.control}
          name="password"
          type="password"
          title="Password"
          isImportant
          placeholder="Enter your password"
        />
      </div>

      <div className="mt-6">
        <Button loading={loginOrRegisterMutation.isPending}>Login</Button>
      </div>

      <p className="mt-4 text-sm text-center text-green-800/80">
        <span>Don&apos;t have an account? </span>
        <Link href="/admin/register" className="font-semibold underline">
          Register
        </Link>
      </p>
    </form>
  );
}
