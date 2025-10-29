/* eslint-disable @typescript-eslint/no-explicit-any */
import { HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute } from "react";
import { Controller } from "react-hook-form";
import Label from "../ui/FormLabel";
import Input from "../ui/Input";
import { Text } from "@/components/ui/typography/Text";

type FormFieldType = {
  control: any;
  name: string;
  id?: string;
  title?: string;
  isDark?: boolean;
  disabled?: boolean;
  isImportant?: boolean;
  placeholder?: string;
  className?: string;
  hint?: string;
  type?: HTMLInputTypeAttribute;
  autoComplete?: HTMLInputAutoCompleteAttribute;
};

const FormField = ({
  control,
  type = "text",
  name,
  autoComplete,
  className,
  placeholder,
  isImportant,
  hint,
  id,
  title,
  disabled,
}: FormFieldType) => {
  return (
    <Controller
      control={control}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error, invalid },
      }) => {
        return (
          <div className="w-full mb-4">
            {title && (
              <Label htmlFor={id ?? name}>
                {title}
                {isImportant && <span className="text-red-500 ml-0.5">*</span>}
              </Label>
            )}

            <Input
              value={value}
              className={className}
              type={type}
              hint={hint}
              invalid={invalid}
              placeholder={placeholder}
              autoComplete={autoComplete}
              disabled={disabled}
              onChange={(e) => onChange(e)}
              onBlur={onBlur}
              id={id ?? name}
            />

            {invalid && (
              <Text size="sm" className="mt-2 font-medium text-red-600">
                {error?.message}
              </Text>
            )}
          </div>
        );
      }}
      name={name}
    />
  );
};

export default FormField;
