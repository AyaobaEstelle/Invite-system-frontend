"use client";

import useAuth from "@/hooks/useAuth";
import FormInput from "./FormInput";
import Button from "./reusables/Button";
import Link from "next/link";

interface AuthFormProps {
  type: "login" | "signup";
  user_type?: "admin" | "employee";
}

export function ReusableAuthForm({ type, user_type = "admin" }: AuthFormProps) {
  const {
    loginAdminControl,
    handleSubmitForm,
    loginOrRegisterMutation,
    registerAdminControl,
  } = useAuth(type, user_type);

  const isLogin = type === "login";
  const rolePath = user_type === "admin" ? "admin" : "employee";

  return (
    <form
      className="space-y-6"
      onSubmit={
        isLogin
          ? loginAdminControl.handleSubmit(handleSubmitForm)
          : registerAdminControl.handleSubmit(handleSubmitForm)
      }
    >
      {!isLogin && (
        <FormInput
          control={registerAdminControl.control}
          name="name"
          title="Full Name"
        />
      )}

      <FormInput
        control={
          isLogin ? loginAdminControl.control : registerAdminControl.control
        }
        name="email"
        title="Email"
      />

      <FormInput
        control={
          isLogin ? loginAdminControl.control : registerAdminControl.control
        }
        name="password"
        type="password"
        title="Password"
      />

      <Button loading={loginOrRegisterMutation.isPending}>
        {isLogin ? "Login" : "Register"}
      </Button>

      <p className="text-sm text-center text-gray-600">
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <Link
          href={isLogin ? `/${rolePath}/register` : `/${rolePath}/login`}
          className="text-blue-700 font-semibold hover:underline"
        >
          {isLogin ? "Register" : "Login"}
        </Link>
      </p>
    </form>
  );
}
