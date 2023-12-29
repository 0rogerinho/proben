/* eslint-disable @next/next/no-img-element */
// React
import React from 'react';
// Layout
import { BaseLayout } from '@/layout';

const dataCard = [
  {
    id: 1,
    icone: '/icon/padlock.svg',
    title: 'REDUÇÃO DO ABSENTEÍSMO',
    content:
      '79% das ausências no trabalho são por razões de saúde*. A telemedicina é uma forte aliada para a redução deste número, podendo o colaborador ser atendido sem sair da empresa',
  },
  {
    id: 2,
    icone: '/icon/map.svg',
    title: 'EXCLUI A DISTÂNCIA COMO BARREIRA AO CUIDADO',
    content:
      'O paciente que precisa de cuidado é atendido onde estiver. Basta ter um celular ou um equipamento com conexão à internet. Pode-se instalar um totem, tablet ou computador em unidades de saúde, também.',
  },
  {
    id: 3,
    icone: '/icon/doctor.svg',
    title: 'AMPLIA O ACESSO ÀS ESPECIALIDADES MÉDICAS',
    content:
      'Supre a necessidade de especialidades médicas escassas em várias regiões do país.',
  },
  {
    id: 4,
    icone: '/icon/money.svg',
    title: 'EQUILÍBRIO PARA O ORÇAMENTO PÚBLICO',
    content:
      'Perfeita para casos de baixa complexidade, diminui-se a sinistralidade das unidades de média e alta complexidade e melhora o uso dos recursos em saúde, mantendo um atendimento humanizado e com qualidade de vida',
  },
  {
    id: 5,
    icone: '/icon/people.svg',
    title: 'REDUZ AS FILAS DE ATENDIMENTO EM UBS E UPAs',
    content:
      'A UBS equipada com telemedicina realiza um filtro muito mais eficiente de pacientes desafogando as unidades de média e alta complexidade como as UPAs e Hospitais Públicos, reduzindo, também, o custo assistencial para o SUS',
  },
];

const dataCardGraphic = [
  {
    id: 1,
    icon: '/icon/graphic51.svg',
    content:
      'Dos pacientes que buscam o Pronto-Socorro poderiam resolver sua situação de saúde por Telemedicina',
  },
  {
    id: 2,
    icon: '/icon/graphic80.svg',
    content:
      'Dos pacientes buscam o Pronto-Socorro ou um especialista como primeira opção quando precisam de atendimento médico',
  },
];

interface CardProps {
  icone: string;
  title: string;
  content: string;
}

const Card = ({ content, icone, title }: CardProps) => {
  return (
    <div className="text-center space-y-4 md:w-[20.625rem] lg:w-[300px] desktop:w-[400  px]">
      <div className="bg-gradient-to-t from-dark-blue to-light-blue rounded-full w-[4rem] h-[4rem] m-auto flex justify-center items-center">
        <img src={icone} alt={icone} />
      </div>
      <div className="space-y-3">
        <h3 className="text-dark-blue font-bold">{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

interface CardGraphicProps {
  icon: string;
  content: string;
}

const CardGraphic = ({ content, icon }: CardGraphicProps) => {
  return (
    <div className="flex items-center text-start text-white font-semibold text-[.75rem] gap-4 w-[230px] min-[375px]:w-[300px] lg:w-[280px] desktop:w-[370px] desktop:text-base">
      <img
        className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] lg:w-[50px] lg:h-[50px] desktop:w-[60px] desktop:h-[60px]"
        src={icon}
        alt=""
      />
      <p>{content}</p>
    </div>
  );
};

export const WhyIsEssential = () => {
  return (
    <BaseLayout className="relative mt-64 text-center space-y-20 min-[375px]:mt-56 overflow-hidden min-[840px]:mt-[400px] lg:mt-60 desktop:mt-[450px]">
      <h2 className="text-2xl font-bold text-dark-blue sm:text-[2.5rem] sm:w-[600px] m-auto leading-10">
        Por que a Telemedicina é essencial?
      </h2>
      <div className="w-full grid grid-rows-5 grid-flow-col justify-between gap-10 pb-60 min-[375px]:pb-70 min-[380px]:pb-80 sm:pb-0 sm:grid-rows-3 lg:pb-[130px] lg:grid-rows-2 desktop:pb-[300px] desktop:justify-around">
        {dataCard.map(({ id, ...data }) => (
          <Card key={id} {...data} />
        ))}
      </div>

      <img
        className="absolute bottom-0 sm:right-0 sm:bottom-10 sm:w-[380px] lg:bottom-36 lg:w-[340px] desktop:bottom-72 desktop:w-[450px] desktop:h-[340px]"
        src="/icon/arrow.png"
        alt="Arrow"
      />

      <div className="absolute mx-14 space-y-4 bottom-2 min-[375px]:bottom-8 min-[380px]:bottom-12 sm:-right-10 sm:bottom-[80px] lg:bottom-[170px] lg:-right-12 desktop:bottom-[350px]">
        {dataCardGraphic.map(({ id, ...data }) => (
          <CardGraphic key={id} {...data} />
        ))}
      </div>
    </BaseLayout>
  );
};
