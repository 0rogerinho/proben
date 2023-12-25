/* eslint-disable @next/next/no-img-element */
// Components
import {
  CallToAction,
  DigitalPromptService,
  DigitalService,
  Header,
  MarketLeader,
  PromptService,
  Responsiveness,
  Teleconsulting,
  WhyIsEssential,
} from '@/components';

export default function Home() {
  return (
    <main className="relative overflow-hidden max-w-[1440px] m-auto">
      <Responsiveness />
      <Header />
      <CallToAction />
      <WhyIsEssential />
      <DigitalService />
      <MarketLeader />
      <Teleconsulting />
      <PromptService />
      <DigitalPromptService />
    </main>
  );
}
