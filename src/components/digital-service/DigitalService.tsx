/* eslint-disable @next/next/no-img-element */
// React
import React from 'react';
// React icons
import { FaCheckCircle } from 'react-icons/fa';
// Layout
import { BaseLayout } from '@/layout';

const data = [
  {
    id: 1,
    title: 'PRONTO ATENDIMENTO',
    content: 'ONLINE 24/7',
  },
  {
    id: 2,
    title: 'TRIAGEM COM EQUIPE ',
    content: 'MULTIDISCIPLINAR',
  },
  {
    id: 1,
    title: 'EXAMES INTEGRADOS',
    content: 'COM USO DE WEAREBLES',
  },
  {
    id: 1,
    title: 'CONSULTAS COM MAIS DE',
    content: '25 ESPECIALIDADES',
  },
];

interface CardProps {
  title: string;
  content: string;
}

const Card = ({ content, title }: CardProps) => {
  return (
    <div className="flex items-center gap-4">
      <FaCheckCircle className="sm:text-3xl" color="#00FFF0" />
      <div className="font-medium sm:text-xl lg:text-base">
        <p className="text-white">{title}</p>
        <p className="text-light-orange">{content}</p>
      </div>
    </div>
  );
};

export const DigitalService = () => {
  return (
    <div className="w-full bg-gradient-to-l from-light-blue to-dark-blue">
      <BaseLayout className="mt-14 py-12 space-y-12 relative desktop:px-12 desktop:py-24">
        <h1 className="text-dark-orange text-xl font-bold text-center sm:text-[2.5rem] sm:leading-[50px] lg:w-[650px] lg:text-4xl lg:text-start desktop:text-5xl">
          Atendimento 100% digital ou Jornada Híbrida?
        </h1>
        <div className="grid grid-rows-4 grid-flow-col gap-4 justify-center sm:grid-rows-2 sm:gap-20 lg:justify-start lg:gap-10">
          {data.map(({ id, ...data }) => (
            <Card key={id} {...data} />
          ))}
        </div>
        <img
          className="absolute hidden lg:block w-[500px] -right-12 bottom-0 desktop:w-[654px]"
          src="/mockup/doctor1.png"
          alt="doctor_image"
        />
      </BaseLayout>
    </div>
  );
};
