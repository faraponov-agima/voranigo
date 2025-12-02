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
          <p>
            mIDH1/2 и&nbsp;повышенный уровень 2-ГГ влияют на&nbsp;множество
            процессов на уровне опухолевых клеток, включая <sup>10, 19-27</sup>:
          </p>
          <ul className="space-y-5 pl-10">
            {listItems.map((item, index) => (
              <li key={index} className="flex gap-3">
                <span>{item}</span>
              </li>
            ))}
          </ul>
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
          className="absolute right-0 top-0 aspect-square w-[25%]"
        >
          <MeshNetworkAnimation
            color="#000000"
            connectionDistance={300}
            particleCount={8}
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
