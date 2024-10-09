"use client"
import React, { forwardRef, InputHTMLAttributes, useState } from 'react';
import { FaEyeSlash } from 'react-icons/fa';
import { IoEyeSharp } from "react-icons/io5";

interface PasswordInputPropsType extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputPropsType>((
  { label, errorMessage, className, ...props },
  ref
) => {
  const [inputType, setInputType] = useState("password");
  const [isFocused, setIsFocused] = useState(false);

  const onClickViewToggleBtn = () => {
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
    <div className={`relative w-full px-4 py-2 border rounded-md ${isFocused && "ring-gray-600 ring-1 border-transparent"} ${className}`}>
      <input
        ref={ref}
        className={`w-full pr-5 px-0 py-0 focus:outline-none`
        }
        type={props.type ?? inputType}
        onFocus={onFocusInput}
        onBlur={onBlurInput}
        {...props}
      />
      <button
        type="button"
        onClick={onClickViewToggleBtn}
        className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
      >
        {inputType === "password" ? <FaEyeSlash /> : <IoEyeSharp />}
      </button>
    </div>
  );
});

export default PasswordInput;
