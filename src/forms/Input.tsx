// React
import React from 'react';
// Libs
import { cn } from '@/libs/utils';

type IInputProps = React.HTMLAttributes<HTMLInputElement> & {
  title?: string;
  type: string;
  error?: string;
  placeholder?: string;
  className?: string;
};

export const Input = ({
  title,
  type,
  placeholder,
  className,
  error,
  ...props
}: IInputProps) => {
  return (
    <div className="flex flex-col py-2 w-full space-y-1">
      <label
        className="font-sans text-base font-semibold text-white"
        htmlFor={title}
      >
        {title}
      </label>
      <input
        className={cn(
          'w-full text-black px-4 h-[40px] sm:h-[50px] text-sm leading-5 bg-white border border-[#858585] rounded-lg outline-none placeholder:text-gray-200 focus:outline-none',
          className,
        )}
        type={type}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};
