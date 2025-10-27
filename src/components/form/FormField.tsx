import { HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute } from "react";
import { Controller } from "react-hook-form";
import Label from "../ui/FormLabel";
import Input from "../ui/Input";

type FormFieldType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
              <Label
                htmlFor={id ?? name}
                className="block mb-2 text-sm font-semibold text-gray-600"
              >
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
              <p className="mt-2 text-xs font-medium text-red-600">
                {error?.message}
              </p>
            )}
          </div>
        );
      }}
      name={name}
    />
  );
};

export default FormField;
