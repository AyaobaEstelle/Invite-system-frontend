import React, { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { Text } from "@/components/ui/typography/Text";

interface FormLabelProps {
  htmlFor?: string;
  children: ReactNode;
  className?: string;
}

const FormLabel: FC<FormLabelProps> = ({ htmlFor, children, className }) => {
  return (
    <label htmlFor={htmlFor} className={twMerge("block mb-1.5", className)}>
      <Text
        size="base"
        className="font-medium text-gray-700 dark:text-gray-400"
      >
        {children}
      </Text>
    </label>
  );
};

export default FormLabel;
