/* eslint-disable @next/next/no-img-element */
// React
import { BaseLayout } from '@/layout';
// Layout
import React from 'react';
// Libs
import { cn } from '@/libs/utils';

interface ICardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className }: ICardProps) => {
  return (
    <div
      className={cn(
        'flex justify-center items-center bg-gradient-to-t from-light-orange to-dark-orange rounded-full p-2 w-[122px] h-[122px] text-center flex-col',
        className,
      )}
    >
      {children}
    </div>
  );
};

interface IArrowProps {
  className: string;
  left: boolean;
}

const Arrow = ({ className, left }: IArrowProps) => {
  return (
    <div
      className={cn(
        '-z-10 w-full bg-gradient-to-t from-light-orange to-dark-orange rounded-full',
        left
          ? 'rotate-[50deg] min-[375px]:rotate-[40deg] sm:rotate-[29deg] lg:rotate-[40deg]'
          : '-rotate-[52deg] min-[375px]:-rotate-[40deg] sm:-rotate-[30deg] lg:-rotate-[36deg]',
        className,
      )}
    ></div>
  );
};

interface IIcon {
  className: string;
  alt: string;
  icon: string;
  left: boolean;
}

const Icon = ({ className, icon, alt, left }: IIcon) => {
  return (
    <img
      className={cn(
        'w-[150px] sm:w-[180px] lg:w-[150px]',
        left ? 'left-[2%]' : 'right-[2%]',
        className,
      )}
      src={icon}
      alt={alt}
    />
  );
};

export const MarketLeader = () => {
  return (
    <BaseLayout className="mt-14 relative h-[1500px] sm:w-[569px] sm:m-auto md:mt-16 md:space-y-12 lg:w-[1024px] m-auto lg:h-[500px]">
      <div className="font-extrabold text-dark-blue text-center md:font-bold">
        <h3 className="text-sm md:text-2xl">PLATAFORMAS ROBUSTAS</h3>
        <h3 className="text-2xl md:text-[2.5rem]">LÍDERES DE MERCADO</h3>
      </div>

      <Card className="text-white absolute top-[120px] lg:top-[100px]">
        <p className="text-sm">
          Atendimento em <strong>todos</strong> os estados brasileiros
        </p>
      </Card>
      <Icon
        className="absolute right-[2%] top-[150px] w-[120px] sm:top-[100px] lg:left-[19%]"
        icon="/icon/mapDoctor.svg"
        alt="mapDoctor"
        left={false}
      />

      <Card className="text-white absolute top-[350px] right-1 lg:top-[250px] lg:left-52">
        <p className="font-bold">+ 4K medicos</p>
        <p className="text-sm">credenciados</p>
      </Card>
      <Arrow
        className="h-6 absolute top-[280px] lg:w-[280px] lg:top-[210px]"
        left={true}
      />
      <Icon
        className="absolute left-[2%] top-[350px] sm:top-[320px] lg:top-[240px]"
        icon="/icon/doctorStatus.svg"
        alt=""
        left={true}
      />

      <Card className="text-white absolute top-[590px] lg:top-[100px] lg:left-[430px]">
        <p className="font-bold w-[70px]">+ 10m de vidas</p>
        <p className="text-sm">beneficiadas</p>
      </Card>
      <Arrow
        className="h-6 absolute top-[520px] lg:w-[280px] lg:top-[200px] lg:left-[280px]"
        left={false}
      />
      <Icon
        className="absolute top-[590px] w-[120px] sm:top-[550px] lg:top-[240px] lg:left-[415px]"
        icon="/icon/savePeople.svg"
        alt=""
        left={false}
      />

      <Card className="text-white absolute top-[830px] right-1 lg:top-[250px] lg:left-[640px]">
        <p className="font-bold">+ 3m</p>
        <p className="font-bold">de vidas</p>
        <p className="text-[.75rem]">de consultas/ano</p>
      </Card>
      <Arrow
        className="h-6 absolute top-[750px] lg:w-[280px] lg:top-[200px] lg:left-[430px]"
        left={true}
      />
      <Icon
        className="absolute top-[830px] sm:top-[800px] lg:top-[100px] lg:left-[620px] lg:w-[140px]"
        icon="/icon/phone.svg"
        alt=""
        left={true}
      />

      <Card className="text-white absolute top-[1070px] left-1 lg:top-[100px] lg:left-[860px]">
        <p className="font-bold">6 anos</p>
        <p className="text-[.75rem]">de operação</p>
      </Card>
      <Arrow
        className="h-6 absolute top-[1000px] lg:w-[280px] lg:top-[200px] lg:left-[720px]"
        left={false}
      />
      <Icon
        className="absolute top-[1050px] sm:top-[1030px] lg:top-[240px] lg:left-[840px]"
        icon="/icon/sixYears.svg"
        alt=""
        left={false}
      />
    </BaseLayout>
  );
};
