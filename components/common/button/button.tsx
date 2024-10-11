import { ButtonHTMLAttributes } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

interface ButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  styleType?: 'primary' | 'secondary' | 'error';
  size?: 'l' | 'm' | 's';
  isLoading?: boolean;
}

export default function Button({
  text,
  styleType,
  size = 'm',
  isLoading,
  className,
  ...props
}: ButtonPropsType) {
  let styleClass = '';
  let sizeClass = '';

  switch (styleType) {
    case 'primary': {
      styleClass = 'text-white bg-mint-600 hover:bg-mint-800';
      break;
    }
    case 'secondary': {
      styleClass =
        'text-mint-600 bg-white border border-mint-600 hover:border-mint-800 hover:text-mint-800';
      break;
    }
    case 'error': {
      styleClass = 'text-white bg-red hover:bg-red-600';
      break;
    }
  }

  switch (size) {
    case 'l': {
      sizeClass = 'h-[40px] label-l';
      break;
    }
    case 'm': {
      sizeClass = 'h-[36px] label-m';
      break;
    }
    case 's': {
      sizeClass = 'h-[32px] label-s';
      break;
    }
  }

  return (
    <button
      type={props.type ?? 'button'}
      className={`flex-center w-fit px-3 py-1 rounded-md ${styleClass} ${sizeClass} ${className}`}
      {...props}
    >
      {isLoading ? <AiOutlineLoading3Quarters /> : text}
    </button>
  );
}
