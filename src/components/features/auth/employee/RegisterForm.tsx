"use client";

import useAuth from "@/hooks/useAuth";
import FormField from "@/components/form/FormField";
import Button from "@/components/ui/Button";
import { Text } from "@/components/ui/typography/Text";

export function EmployeeRegisterForm() {
  const {
    registerEmployeeControl,
    inviteEmail,
    handleSubmitForm,
    loginOrRegisterMutation,
  } = useAuth("signup", "employee");

  return (
    <form
      className="w-full max-w-md bg-white p-6 rounded-xl shadow-sm"
      onSubmit={registerEmployeeControl.handleSubmit(handleSubmitForm)}
      noValidate
    >
      <div className="space-y-4">
        <FormField
          control={registerEmployeeControl.control}
          name="name"
          title="Full Name"
          isImportant
          placeholder="Full Name"
        />

        <div className="w-full mb-4">
          <label className="block mb-1 font-medium text-gray-700">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={inviteEmail}
            disabled
            className="w-full rounded-lg border border-gray-300 px-3 py-2 bg-gray-100 text-gray-700 cursor-not-allowed"
          />
        </div>

        <FormField
          control={registerEmployeeControl.control}
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
        <a href="/employee/login" className="font-semibold underline">
          Login
        </a>
      </Text>
    </form>
  );
}
