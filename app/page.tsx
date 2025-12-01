import Image from "next/image";

import { Block } from "@/components/Block";
import logo from "@/assets/logo.svg";
import heroBrain from "@/public/hero-brain.png";
import heroLinesBottom from "@/public/hero-lines-bottom.svg";
import heroLinesTop from "@/public/hero-lines-top.svg";
import heroMeshBrain from "@/public/hero-mesh-brain.svg";

const tumorTypes = [
  "Астроцитома mIDH",
  "Олигодендроглиома mIDH и коделеция 1p/19q",
] as const;

export default function Home() {
  return (
    <Block
      containerClassName="bg-[#050315] overflow-hidden"
      contentClassName="relative isolate flex flex-col gap-12 text-white py-12 sm:py-16 lg:py-20"
    >
      <div className="pointer-events-none absolute inset-[-5%] -z-10">
        <div
          aria-hidden="true"
          className="absolute -left-24 top-8 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(95,71,255,0.45),transparent_70%)] blur-[150px] opacity-70"
        />
        <div
          aria-hidden="true"
          className="absolute right-[-18%] top-[-8%] h-[420px] w-[600px] opacity-80"
        >
          <Image
            src={heroLinesTop}
            alt=""
            fill
            sizes="(min-width: 1280px) 420px, 60vw"
            className="object-contain"
            aria-hidden="true"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute right-[-12%] bottom-[-32%] h-[520px] w-[360px] opacity-80"
        >
          <Image
            src={heroLinesBottom}
            alt=""
            fill
            sizes="(min-width: 1280px) 320px, 40vw"
            className="object-contain"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="space-y-8">
        <div className="inline-flex w-fit items-center rounded-2xl bg-white/10 px-6 py-3 backdrop-blur-md">
          <Image
            src={logo}
            alt="Servier"
            priority
            width={150}
            height={30}
            className="h-[30px] w-[150px]"
          />
        </div>
        <h1 className="max-w-4xl text-[clamp(2.5rem,4.2vw,4rem)] font-semibold leading-[1.1] tracking-tight text-[#EAE5FF]">
          Мутации, определяющие заболевание при диффузной глиоме у взрослых
        </h1>
      </div>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,0.9fr)] lg:items-start">
        <div className="relative">
          <div className="relative mx-auto aspect-[1.25] w-full max-w-[720px]">
            <Image
              src={heroBrain}
              alt="Визуализация активности головного мозга"
              fill
              priority
              sizes="(min-width: 1280px) 40vw, (min-width: 768px) 60vw, 90vw"
              className="object-contain drop-shadow-[0_35px_120px_rgba(96,78,255,0.35)]"
              style={{ transform: "scaleX(-1)" }}
            />
          </div>
        </div>

        <div className="space-y-10 text-lg leading-relaxed text-white/90">
          <p>
            В классификации опухолей ЦНС ВОЗ 2021 года статус мутации IDH был
            определён как неотъемлемый компонент для верификации диагноза
            диффузной глиомы у взрослых пациентов
            <sup className="ml-1 text-sm font-semibold text-white/70">1</sup>.
          </p>
          <div className="space-y-8">
            <p>
              Согласно классификации ВОЗ 2021 года, выделяют 2 типа диффузной
              глиомы с мутацией IDH
              <sup className="ml-1 text-sm font-semibold text-white/70">1</sup>.
            </p>
            <div className="relative pl-10">
              <ul className="space-y-5 text-white">
                {tumorTypes.map((type) => (
                  <li key={type} className="flex gap-3">
                    <span>{type}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p>
            В ведущих клинических рекомендациях по нейроонкологии, включая EANO,
            ASCO-SNO и NCCN, отмечена важность мутации IDH в диагностике,
            определении прогноза и выборе терапии
            <sup className="ml-1 text-sm font-semibold text-white/70">3-5</sup>.
          </p>
        </div>
      </div>
    </Block>
  );
}
