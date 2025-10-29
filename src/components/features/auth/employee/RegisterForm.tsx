"use client";

import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import FormField from "@/components/form/FormField";
import Button from "@/components/ui/Button";
import { Text } from "@/components/ui/typography/Text";

export function EmployeeRegisterForm() {
  const { registerAdminControl, handleSubmitForm, loginOrRegisterMutation } =
    useAuth("signup", "employee");

  return (
    <form
      className="w-full max-w-md bg-white p-6 rounded-xl shadow-sm"
      onSubmit={registerAdminControl.handleSubmit(handleSubmitForm)}
      noValidate
    >
      <div className="space-y-4">
        <FormField
          control={registerAdminControl.control}
          name="name"
          title="Full Name"
          isImportant
          placeholder="Jane Doe"
        />

        <FormField
          control={registerAdminControl.control}
          name="email"
          title="Email Address"
          isImportant
          placeholder="you@example.com"
        />

        <FormField
          control={registerAdminControl.control}
          name="password"
          type="password"
          title="Password"
          isImportant
          placeholder="Create a strong password"
        />
      </div>

      <div className="mt-6">
        <Button loading={loginOrRegisterMutation.isPending}>Register</Button>
      </div>

      <Text size="xs" className="mt-4 text-center">
        Already have an account?{" "}
        <Link href="/employee/login" className="font-semibold underline">
          Login
        </Link>
      </Text>
    </form>
  );
}
