'use client';
import React, { forwardRef, InputHTMLAttributes, useState } from 'react';

// 기존 input 타입 확장
interface InputPropsType extends InputHTMLAttributes<HTMLInputElement> {
  status?: 'default' | 'error' | 'success';
}

const Input = forwardRef<HTMLInputElement, InputPropsType>(
  ({ status = 'default', className, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    let borderColor = '';
    switch (status) {
      case 'default': {
        borderColor = isFocused ? 'border-gray-600' : 'border-gray-300';
        break;
      }
      case 'error': {
        borderColor = 'border-red';
        break;
      }
      case 'success': {
        borderColor = 'border-green';
        break;
      }
    }

    const onFocusInput = (event: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      props.onFocus?.(event);
    };
    const onBlurInput = (event: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      props.onBlur?.(event);
    };

    return (
      <input
        ref={ref}
        className={`w-full px-4 py-2 border rounded-md focus:outline-none body-m disabled:bg-gray-100 ${borderColor} ${className}`}
        onFocus={onFocusInput}
        onBlur={onBlurInput}
        {...props}
      />
    );
  }
);

export default Input;
