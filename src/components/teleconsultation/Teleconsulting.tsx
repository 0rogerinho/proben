/* eslint-disable @next/next/no-img-element */
// React
import React from 'react';
// Libs
import { cn } from '@/libs/utils';
// Layout
import { BaseLayout } from '@/layout';
// React icons
import { FaUserDoctor } from 'react-icons/fa6';
import { IoMdCalendar } from 'react-icons/io';
import { LuStethoscope } from 'react-icons/lu';
import { RiFilePaper2Line } from 'react-icons/ri';
import { AiOutlineApi } from 'react-icons/ai';

interface ICardProps {
  className?: string;
  content: string;
  icon: React.ReactElement;
}

const Card = ({ className, content, icon }: ICardProps) => {
  return (
    <div
      className={cn(
        'w-[297px] h-[75px] md:w-[335px] lg:w-[600px] desktop:w-[800px] bg-white rounded-full text-dark-blue p-4 text-start flex gap-3 items-center',
        className,
      )}
    >
      <div className="text-4xl text-dark-blue">{icon}</div>
      <p className="lg:w-[200px]">{content}</p>
    </div>
  );
};

export const Teleconsulting = () => {
  return (
    <div className="bg-gradient-to-l from-light-blue to-dark-blue">
      <BaseLayout className="relative mt-14 py-12 *:font-bold gap-6 items-center sm:items-start desktop:h-auto overflow-hidden">
        <div className="flex flex-col justify-center items-center sm:m-auto sm:flex-row lg:m-0 lg:mt-6 desktop:mt-0 min-[1460px]:gap-[8%]">
          <div className="text-center sm:text-start text-white sm:w-[308px] space-y-9 sm:pb-12 lg:pb-0 desktop:w-[380px]">
            <h2 className="text-dark-orange text-[2.5rem] lg:text-5xl desktop:text-[3.625rem]">
              Teleconsulta
            </h2>
            <p className="text-xl font-medium lg:text-4xl">
              Plataforma de{' '}
              <strong className="text-[#39FFFF]">Vídeo Consultas</strong>
            </p>
            <p className="font-normal lg:text-xl">
              Solução de telemedicina personalizada para cada organização
              público e privada .
            </p>
          </div>
          <img
            className="mt-6 w-[309px] sm:w-[430px] lg:w-[400px] desktop:w-[500px]"
            src="/icon/phone.svg"
            alt="phone"
          />
        </div>
        <div className="pt-8 flex flex-wrap justify-center items-center gap-8 sm:pt-0 lg:absolute lg:flex-nowrap lg:flex-col lg:-right-[320px] lg:gap-4 desktop:-right-[500px] desktop:gap-6 desktop:items-start">
          <Card
            icon={<IoMdCalendar />}
            content="Consultas Agendadas com Especialistas"
            className="lg:ml-0"
          />

          <Card
            icon={<AiOutlineApi />}
            content="Integrações via API - SDK – Ad -Hoc"
            className="lg:ml-16"
          />

          <Card
            icon={<FaUserDoctor />}
            content="Serviços médicos em Português e Espanhol"
            className="lg:ml-36"
          />

          <Card
            icon={<RiFilePaper2Line />}
            content="Prontuário Eletrônico e Receita Digital"
            className="lg:ml-52"
          />

          <Card
            icon={<LuStethoscope />}
            content="Plantão 24h/7 "
            className="lg:ml-72"
          />
        </div>
      </BaseLayout>
    </div>
  );
};
