/* eslint-disable @next/next/no-img-element */
// React
import React from 'react';

export const Responsiveness = () => {
  return (
    <div className="">
      {/* Mobile */}
      <img
        className="w-full absolute -z-50 sm:hidden  min-h-[1600px] min-[380px]:max-h-[1500px] "
        src="/bg/bgMobile.png"
        alt="bgMobile"
      />
      {/* Tablet */}
      <img
        className="w-full absolute -z-50 hidden md:block lg:hidden min-[800px]:-top-16"
        src="/bg/bgTablet.png"
        alt="bgMobile"
      />
      {/* Laptop */}
      <img
        className="w-full absolute -z-50 hidden lg:block desktop:hidden"
        src="/bg/bgLaptop.png"
        alt="bgMobile"
      />
      {/* Desktop */}
      <img
        className="w-full absolute -z-50 hidden desktop:block min-h-[1000px]"
        src="/bg/bgDesktop.png"
        alt="bgMobile"
      />
    </div>
  );
};
