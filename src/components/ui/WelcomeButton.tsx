import React from "react";

type WelcomeButtonProps = {
  children: React.ReactNode;
  isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function WelcomeButton({
  children,
  isLoading,
  ...props
}: WelcomeButtonProps) {
  return (
    <button
      {...props}
      // eslint-disable-next-line react/prop-types
      disabled={isLoading || props.disabled}
      className="px-6 py-2.5 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold shadow-lg transition disabled:opacity-50 text-sm sm:text-base"
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
}
