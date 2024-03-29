/* eslint-disable @next/next/no-img-element */
// React
import React from 'react';

export const Responsiveness = () => {
  return (
    <div className="w-full m-auto">
      {/* Mobile */}
      <img
        className="w-full absolute -z-50 sm:hidden  min-h-[1600px] min-[327px]:max-h-[1850px] min-[375px]:max-h-[1950px] min-[380px]:max-h-[1900px] "
        src="/bg/bgMobile.png"
        alt="bgMobile"
      />
      {/* Tablet */}
      <img
        className="w-full absolute -z-50 hidden md:block lg:hidden min-[800px]:-top-16 md:max-h-[1550px]"
        src="/bg/bgTablet.png"
        alt="bgMobile"
      />
      {/* Laptop */}
      <img
        className="w-full absolute -z-50 hidden lg:block desktop:hidden min-h-[1500px]"
        src="/bg/bgLaptop.png"
        alt="bgMobile"
      />
      {/* Desktop */}
      <img
        className="w-full absolute -z-50 hidden m-auto inset-x-0 top-0 desktop:block min-h-[1000px] max-w-[1440px] "
        src="/bg/bgDesktop.png"
        alt="bgMobile"
      />
    </div>
  );
};
