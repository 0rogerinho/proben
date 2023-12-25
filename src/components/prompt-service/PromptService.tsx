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
    id: 3,
    title: 'EXAMES INTEGRADOS',
    content: 'COM USO DE WEAREBLES',
  },
  {
    id: 4,
    title: 'CONSULTAS COM MAIS DE',
    content: '25 ESPECIALIDADES',
  },
  {
    id: 5,
    title: 'CONSULTAS COM MAIS DE',
    content: '25 ESPECIALIDADES',
  },
  {
    id: 6,
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
      <img src="/icon/check.svg" alt="check" />
      <div className="font-medium sm:text-xl lg:text-base">
        <p className="text-black">{title}</p>
        <p className="text-light-orange">{content}</p>
      </div>
    </div>
  );
};

export const PromptService = () => {
  return (
    <BaseLayout className="mt-14 py-12 space-y-12 relative desktop:px-12 lg:items-center justify-center">
      <h1 className="text-dark-blue text-xl font-bold text-center sm:text-[2.5rem] sm:leading-[50px] lg:w-[650px] lg:text-4xl desktop:text-5xl">
        Atendimento 100% digital ou Jornada Híbrida?
      </h1>
      <div className="grid grid-rows-6 grid-flow-col gap-4 justify-center sm:grid-rows-3 sm:gap-20 lg:justify-start lg:gap-10 lg:grid-rows-2">
        {data.map(({ id, ...data }) => (
          <Card key={id} {...data} />
        ))}
      </div>
    </BaseLayout>
  );
};
