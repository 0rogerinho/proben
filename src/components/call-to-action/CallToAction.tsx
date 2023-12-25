/* eslint-disable @next/next/no-img-element */
import React from 'react';
// Layout
import { BaseLayout } from '@/layout';
// React icons
import { TiArrowSortedDown } from 'react-icons/ti';
// Forms
import { Input } from '@/forms/Input';

const data = [
  {
    id: '1',
    text: 'Cardiologista disponivel 24/7',
  },
  {
    id: '2',
    text: 'Triagem automática de exames vai inteligência Artificial em 50s',
  },
  {
    id: '3',
    text: 'Suport na conduta medica seguindo as diretrizes da SBC ',
  },
  {
    id: '4',
    text: 'Auxílio nas decisões clínicas em situações cardiológicas tempo-sensiveis',
  },
  {
    id: '5',
    text: 'Integração com os laudos das clínicas para ajudar hospitais da rede',
  },
  {
    id: '6',
    text: 'Redução de custo médico e despesas operacionais',
  },
  {
    id: '7',
    text: 'Eficiência e padronização no tempo de entrega dos laudos',
  },
  {
    id: '8',
    text: 'Dados de pacientes integrados e estruturados + dashboards de acompanhamento',
  },
  {
    id: '9',
    text: 'Segurança de dados com base nas diretrizes da LGPD',
  },
];

export const CallToAction = () => {
  return (
    <BaseLayout className="text-white text-center mt-4 relative overflow-hidden sm:text-start sm:mt-16 space-y-8 desktop:flex-row justify-between desktop:mt-20">
      <div className="sm:w-[452px] space-y-5">
        <h2 className="text-3xl font-bold sm:text-4xl">Telelaudo</h2>
        <p className="">
          Diagnóstico e apoio a conduta da emergência cardiovascular, feito
          remotamente
        </p>

        <div className="text-light-orange text-sm space-y-3 pt-52 min-[375px]:pt-80  min-[375px]:pb-14 sm:pb-16 sm:text-start sm:pt-0 sm:w-[452px] font-medium">
          {data.map(({ id, text }) => {
            return (
              <div className="flex" key={id}>
                <TiArrowSortedDown className="text-light-orange -rotate-90 hidden sm:block" />
                <p className="w-full">{text}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile */}
      <img
        className="absolute left-[20%] top-28 rotate-6 min-[375px]:left-[28%] min-[375px]:top-36 sm:hidden"
        src="/mockup/handMobile.png"
        alt="Mockup"
      />
      {/* Tablet */}
      <img
        className="absolute left-[70%] top-20 rotate-6 hidden sm:block tablet:left-[72%] lg:hidden"
        src="/mockup/handTablet.png"
        alt="Mockup"
      />
      {/* Laptop */}
      <img
        className="absolute left-[60%] top-10 hidden lg:block desktop:hidden"
        src="/mockup/handLaptop.png"
        alt="Mockup"
      />

      <form
        action=""
        className="w-full md:w-[550px] lg:w-[637px] desktop:w-[500px] bg-[#3551FF] rounded-3xl bg-opacity-50 m-auto desktop:m-0 p-4 text-start sm:p-8"
      >
        <Input type="text" title="Nome Completo" className="text-black" />
        <Input type="text" title="Email" className="text-black" />
        <Input type="text" title="Telefone" className="text-black" />
        <Input type="text" title="Emails" className="text-black" />
        <button className="w-full bg-[#0054FF] rounded-lg flex justify-center items-center h-[40px] sm:h-[50px] mt-4">
          Enviar
        </button>
      </form>
    </BaseLayout>
  );
};
