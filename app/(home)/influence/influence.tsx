"use client";

import { useState } from "react";
import { Block } from "@/components/block";
import Scheme from "./scheme.svg";
import { Button } from "@/components/ui/button";
import { FadeMask } from "@/components/fade-mask";
import { MeshNetworkAnimation } from "@/components/mesh-network-animation";
import { SchemeViewer } from "@/components/scheme-viewer";

const listItems = [
  <>
    По&nbsp;имеющимся данным, мутации IDH1/2, как правило, возникают
    на&nbsp;самых ранних этапах развития заболевания<sup>10, 17</sup>.
  </>,
  <>
    За&nbsp;счет значительного повышения уровня 2-ГГ происходит не&nbsp;только
    непрерывный рост опухоли, но&nbsp;так&nbsp;же накопление дальнейших
    генетических изменений, что в конечном итоге усиливает агрессивность
    заболевания<sup>8, 17, 18, 24, 30-32</sup>. Основываясь на&nbsp;этой
    информации, можно предположить, что ингибирование mIDH1/2 необходимо
    инициировать на&nbsp;ранних стадиях заболевания<sup>10, 17</sup>.
  </>,
];

export function Influence() {
  const [isSchemeOpen, setIsSchemeOpen] = useState(false);

  return (
    <Block
      containerClassName="py-7 md:py-30"
      contentClassName="space-y-30"
      style={{
        background:
          "var(--Background, radial-gradient(147.6% 97.06% at 50% 100%, #7E7BD3 0%, #6D6BBB 10%, #4A4794 25%, #2E2C5C 50%, #1E1D39 70%, #0A0A0C 100%))",
      }}
    >
      <div className="space-y-12 max-w-4xl ">
        <div>
          <h1 className="font-semibold tracking-tight text-4xl md:text-6xl mb-8 relative z-10">
            mIDH1/2 влияет на&nbsp;патогенез опухоли начиная с&nbsp;самых ранних
            этапов развития диффузной глиомы
          </h1>
          <div className="relative overflow-hidden pt-5 -mt-5">
            <ul className="pl-10 space-y-5">
              {listItems.map((item, index) => {
                const isLast = index === listItems.length - 1;
                return (
                  <li key={index} className="flex gap-3 relative">
                    <span
                      aria-hidden="true"
                      className={`absolute border-dashed border-[#EAE5FF]/40 pointer-events-none ${
                        isLast
                          ? "border-l-[3px] border-b-[3px] rounded-bl-2xl"
                          : "border-b-[3px]"
                      }`}
                      style={{
                        left: "-1.75rem",
                        width: "1.5rem",
                        ...(isLast
                          ? {
                              top: "-1000px",
                              height: "calc(1000px + 0.75em)",
                            }
                          : {
                              top: "0.6em",
                              height: "0px",
                            }),
                      }}
                    />
                    <span>{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="rounded-md bg-[#33315A] p-8 grid gap-30 lg:grid-cols-[3fr_2fr] lg:place-items-end relative">
        <FadeMask
          fadeLeft
          fadeBottom
          className="absolute right-0 top-0 aspect-square w-[25%]"
        >
          <MeshNetworkAnimation
            color="#ffffff"
            connectionDistance={300}
            particleCount={8}
          />
        </FadeMask>
        <Scheme className="max-w-full" />
        <div className="flex flex-col gap-10">
          <p className="text-lg">
            Схема: Многоэтапное прогрессирование глиомы с&nbsp;мутацией IDH и
            накопление генетических поломок. Адаптировано из&nbsp;Kayabolen
            A&nbsp;et&nbsp;al
          </p>
          <Button
            className="w-full lg:hidden"
            size="lg"
            onClick={() => setIsSchemeOpen(true)}
          >
            Смотреть схему
          </Button>
        </div>
      </div>

      <SchemeViewer open={isSchemeOpen} onOpenChange={setIsSchemeOpen}>
        <div className="bg-[#33315A] p-16 rounded-3xl">
          <Scheme className="w-[800px] h-auto" />
        </div>
      </SchemeViewer>

      <p className="text-3xl font-semibold">
        Мутации IDH1/2 являются значимыми мишеням для будущих таргетных
        препаратов на&nbsp;ранних стадиях заболевания<sup>10,17</sup>.
      </p>
    </Block>
  );
}
