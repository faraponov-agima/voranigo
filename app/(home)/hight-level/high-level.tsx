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
    Нестабильность генома<sup>10, 22, 23</sup>
  </>,
  <>
    Препятствование клеточной гибели<sup>26</sup>
  </>,
  <>
    Нарушение регуляции клеточного метаболизма<sup>27</sup>
  </>,
  <>
    Устойчивая пролиферативная сигнализация<sup>23-25</sup>
  </>,
  <>
    Предотвращение противоопухолевого иммунного ответа<sup>19-21</sup>
  </>,
];

export function HighLevel() {
  const [isSchemeOpen, setIsSchemeOpen] = useState(false);

  return (
    <Block
      containerClassName="inverted bg-background text-foreground py-7 md:py-30"
      contentClassName="space-y-30"
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_4fr] text-balance">
        <div className="text-muted-foreground uppercase">
          Повышенный
          <br />
          уровень 2-ГГ
        </div>

        <div className="space-y-12 max-w-4xl ">
          <h1 className="font-semibold tracking-tight text-4xl md:text-6xl">
            Повышенный уровень 2-ГГ&nbsp;— движущая сила онкогенеза при
            диффузной глиоме mIDH1/2
          </h1>
          <div>
            <p className="mb-8 relative z-10">
              mIDH1/2 и&nbsp;повышенный уровень 2-ГГ влияют на&nbsp;множество
              процессов на уровне опухолевых клеток, включая <sup>10, 19-27</sup>:
            </p>
            <div className="relative overflow-hidden pt-5 -mt-5">
              <ul className="pl-10 space-y-5">
                {listItems.map((item, index) => {
                  const isLast = index === listItems.length - 1;
                  return (
                    <li key={index} className="flex gap-3 relative">
                      <span
                        aria-hidden="true"
                        className={`absolute border-dashed border-foreground/40 pointer-events-none ${
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
          <p>
            2-Гидроксиглутарат имеет некоторое химическое сходство
            с&nbsp;глутаматом (нейро- медиатор). Таким образом, избыточное
            накопление 2-ГГ в головном мозге может способствовать возникновению
            судорог
            <sup>10, 28, 29</sup>.
          </p>
        </div>
      </div>
      <div className="rounded-md bg-[#E0DBF4]/40 p-8 grid gap-30 lg:grid-cols-[3fr_2fr] lg:place-items-end relative">
        <FadeMask
          fadeLeft
          fadeBottom
          className="absolute right-0 top-0 aspect-square w-[50%]"
        >
          <MeshNetworkAnimation
            color="#000000"
            connectionDistance={600}
            particleCount={6}
          />
        </FadeMask>
        <Scheme className="max-w-full" />
        <div className="flex flex-col gap-10">
          <p className="text-lg">
            *Одноцентровое ретроспективное исследование, оценивающее динамику
            роста опухоли в&nbsp;когорте (N=128) пациентов с&nbsp;глиомой mIDH,
            наблюдавшихся после хирургической резекции<sup>30</sup>
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
        <Scheme className="w-[800px] h-auto" />
      </SchemeViewer>
    </Block>
  );
}
