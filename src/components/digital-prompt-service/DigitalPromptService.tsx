/* eslint-disable @next/next/no-img-element */
// React
import React from 'react';
// React icons
import { FaComputer } from 'react-icons/fa6';
import { FiClock } from 'react-icons/fi';
// Layout
import { BaseLayout } from '@/layout';

const dataCardGraphic = [
  {
    id: 1,
    icon: <FaComputer />,
    content:
      'Dos pacientes que buscam o Pronto-Socorro poderiam resolver sua situação de saúde por Telemedicina',
  },
  {
    id: 2,
    icon: <FiClock />,
    content:
      'Dos pacientes buscam o Pronto-Socorro ou um especialista como primeira opção quando precisam de atendimento médico',
  },
];

interface CardGraphicProps {
  icon: React.ReactNode;
  content: string;
}

const CardGraphic = ({ content, icon }: CardGraphicProps) => {
  return (
    <div className="flex items-center text-start text-white font-semibold text-[.625rem] gap-4 w-[250px] min-[375px]:w-[300px] lg:w-[280px] desktop:w-[400px] desktop:text-sm">
      <div className="bg-gradient-to-t from-dark-blue to-light-blue rounded-full p-2 m-auto flex justify-center items-center text-2xl sm:text-3xl">
        {icon}
      </div>
      <p>{content}</p>
    </div>
  );
};

export const DigitalPromptService = () => {
  return (
    <BaseLayout className="relative bg-gradient-to-l from-light-blue to-dark-blue text-white pt-8 gap-6 lg:flex-row lg:justify-between lg:py-20">
      <div className="text-center sm:text-start sm:w-[400px] space-y-6">
        <h2 className="text-dark-orange text-2xl font-bold">
          PRONTO ATENDIMENTO DIGITAL 24/7
        </h2>
        <p>
          orpo clínico de médicos capacitados para atendimentos por vídeo para
          os mais diversos tipos de queixas e situações de saúde de baixa
          complexidade, com:
        </p>

        <ul className="list-disc text-dark-orange text-start w-fit m-auto sm:mx-4 lg:pb-12">
          <li>CLÍNICOS GERAIS</li>
          <li>PEDIATRAS</li>
          <li>MÉDICOS DE FAMÍLIA</li>
        </ul>

        <div className="relative w-[320px] -ml-4 min-[375px]:-ml-4 min-[375px]:w-[375px] min-[375px]:pb-12 sm:-ml-5 sm:w-[400px] lg:-ml-7 lg:w-[470px]">
          <img
            className="absolute desktop:w-[500px] desktop:h-[300px] lg:-top-12"
            src="/bg/bgArrowOrange.svg"
            alt="Arrow"
          />

          <div className="relative z-10 space-y-4 pt-2 pl-4 min-[375px]:pt-6 sm:pt-8 lg:pt-0 desktop:pt-8">
            {dataCardGraphic.map(({ id, ...data }) => (
              <CardGraphic key={id} {...data} />
            ))}
          </div>
        </div>
      </div>

      <img
        className="sm:w-[340px] sm:absolute sm:right-4 lg:hidden"
        src="/icon/doctorIcon.svg"
        alt="Arrow"
      />
      <div className=" pt-10 flex flex-col sm:flex-row-reverse sm:justify-between lg:pt-0">
        <div className="space-y-6 sm:w-[400px] text-center sm:text-start">
          <h2 className="text-dark-orange text-2xl font-bold">
            +25 especialidades médicas disponíveis .
          </h2>

          <img
            className="hidden w-[150px] m-auto lg:block"
            src="/icon/doctorIcon.svg"
            alt="Arrow"
          />

          <p>
            Ginecologia, Hematologia, Infectologia, Mastologia, Medicina do
            Trabalho, Ginecologia, Hematologia, Infectologia, Mastologia,
            Medicina do Trabalho, Medicina de Família e Comunidade, Medicina
            Esportiva, Nefrologia...
          </p>

          <button className="w-full bg-dark-orange p-5 flex justify-center items-center rounded-xl font-bold">
            Ver mais
          </button>
        </div>

        <img
          className="mt-4 lg:hidden desktop:block desktop:absolute right-[35%] bottom-0 lg:w-[26%] desktop:w-[375px]"
          src="/mockup/doctor2.png"
          alt="doctor2"
        />
      </div>
    </BaseLayout>
  );
};
