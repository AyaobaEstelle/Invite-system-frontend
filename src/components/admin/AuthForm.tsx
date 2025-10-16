"use client";

import useAuth from "@/hooks/useAuth";
import Button from "../reusables/Button";
import FormInput from "../FormInput";

interface AuthFormProps {
  type: "login" | "signup";
}

export function AuthForm({ type }: AuthFormProps) {
  const { loginAdminControl, handleSubmitForm, loginOrRegisterMutation } =
    useAuth(type);

  return (
    <form
      className="space-y-6"
      onSubmit={
        type == "login"
          ? loginAdminControl.handleSubmit(handleSubmitForm)
          : loginAdminControl.handleSubmit(handleSubmitForm)
      }
    >
      {type === "signup" && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            required
            className="w-full rounded-lg border border-gray-300 p-3 text-sm shadow-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
          />
        </div>
      )}

      <FormInput
        control={loginAdminControl.control}
        name="email"
        title="Email"
      />
      <FormInput
        control={loginAdminControl.control}
        name="password"
        type="password"
        title="Password"
      />
      <Button loading={loginOrRegisterMutation.isPending}>
        {type === "signup" ? "Register" : "Login"}
      </Button>

      <p className="text-sm text-center text-gray-600">
        {type === "signup"
          ? "Already have an account? "
          : "Don’t have an account? "}
        <a
          href={
            type === "signup" ? "/auth/admin/login" : "/auth/admin/register"
          }
          className="text-blue-700 font-semibold hover:underline"
        >
          {type === "signup" ? "Login" : "Register"}
        </a>
      </p>
    </form>
  );
}
