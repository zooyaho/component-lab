"use client"
import React, { forwardRef, InputHTMLAttributes, useState } from 'react';
import { FaEyeSlash } from 'react-icons/fa';
import { IoEyeSharp } from "react-icons/io5";
import Input from './input';

interface PasswordInputPropsType extends InputHTMLAttributes<HTMLInputElement> {
  status?: "default" | "error" | "success";
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputPropsType>((
  { status = "default", className, disabled, ...props },
  ref
) => {
  const [inputType, setInputType] = useState("password");
  const [isFocused, setIsFocused] = useState(false);

  let borderColor = "";
  switch (status) {
    case "default": { borderColor = isFocused ? "border-gray-600" : "border-gray-300"; break; }
    case "error": { borderColor = "border-red"; break; }
    case "success": { borderColor = `border-green`; break; }
  }

  const onClickViewToggleBtn = () => {
    if (disabled) return;
    setInputType((prevType) => prevType === "text" ? "password" : "text")
  }
  const onFocusInput = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    props.onFocus?.(event);
  }
  const onBlurInput = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    props.onBlur?.(event);
  }

  return (
    <div className={`relative w-full h-fit px-4 py-1.5 border rounded-md ${borderColor} ${disabled && "bg-gray-100"} ${className}`}>
      <input
        ref={ref}
        className={`w-full pr-5 body-m focus:outline-none ${disabled && "bg-gray-100"} `}
        type={props.type ?? inputType}
        onFocus={onFocusInput}
        onBlur={onBlurInput}
        disabled={disabled}
        {...props}
      />
      <button
        type="button"
        onClick={onClickViewToggleBtn}
        className={`absolute top-[50%] -translate-y-[50%] right-0 flex items-center py-3 px-3 text-gray-500  ${!disabled && "hover:text-gray-700"} ${disabled && "cursor-default"} `}
      >
        {inputType === "password" ? <FaEyeSlash /> : <IoEyeSharp />}
      </button>
    </div>
  );
});

export default PasswordInput;
