import React, { forwardRef, InputHTMLAttributes } from 'react';

// 기존 input 타입 확장
interface InputPropsType extends InputHTMLAttributes<HTMLInputElement> {
}

const Input = forwardRef<HTMLInputElement, InputPropsType>((
  { className, ...props },
  ref
) => {
  return (
    <input
      ref={ref}
      className={`px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 focus:border-transparent ${className}`
      }
      {...props}
    />
  );
});

export default Input;