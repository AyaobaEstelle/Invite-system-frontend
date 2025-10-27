import React, { FC, HTMLInputAutoCompleteAttribute } from "react";

interface InputProps {
  type?: "text" | "number" | "email" | "password" | "date" | "time" | string;
  id?: string;
  name?: string;
  placeholder?: string;
  defaultValue?: string | number;
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // eslint-disable-next-line no-unused-vars
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  min?: string;
  value?: string | number | undefined;
  max?: string;
  step?: number;
  disabled?: boolean;
  autoComplete?: HTMLInputAutoCompleteAttribute;
  success?: boolean;
  error?: boolean;
  hint?: string;
  invalid?: boolean;
}

const Input: FC<InputProps> = ({
  type = "text",
  id,
  name,
  placeholder,
  defaultValue,
  onChange,
  invalid,
  onBlur,
  value = "",
  className = "",
  min,
  autoComplete,
  max,
  step,
  disabled = false,
  success = false,
  error = false,
  hint,
}) => {
  let inputClasses = `
    w-full rounded-lg border border-gray-200 bg-white 
    p-3 text-sm text-gray-800 placeholder-gray-400 
    shadow-sm transition duration-150 ease-in-out
    focus:outline-none focus:ring-1 focus:ring-green-100 focus:border-green-100
    hover:border-green-300
    ${className}
  `;

  if (disabled) {
    inputClasses += ` bg-gray-100 text-gray-500 cursor-not-allowed`;
  } else if (invalid || error) {
    inputClasses += ` border-red-500 focus:ring-red-200`;
  } else if (success) {
    inputClasses += ` border-green-500 focus:ring-green-200`;
  }

  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete={autoComplete}
        min={min}
        max={max}
        value={value}
        step={step}
        disabled={disabled}
        className={inputClasses}
      />

      {!invalid && hint && (
        <p
          className={`mt-1.5 text-[11px] ${
            error
              ? "text-red-500"
              : success
              ? "text-green-600"
              : "text-gray-500"
          }`}
        >
          {hint}
        </p>
      )}
    </div>
  );
};

export default Input;
