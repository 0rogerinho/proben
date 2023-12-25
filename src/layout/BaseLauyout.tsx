import React from 'react';
// Libs
import { cn } from '@/libs/utils';

interface IBaseLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const BaseLayout = ({ children, className }: IBaseLayoutProps) => {
  return (
    <section
      className={cn(
        'flex flex-col p-[10px] sm:px-[20px] lg:px-[2%] max-w-[1440px] m-auto',
        className,
      )}
    >
      {children}
    </section>
  );
};
