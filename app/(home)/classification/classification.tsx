"use client";

import { useState } from "react";
import { Block } from "@/components/block";
import Scheme from "./scheme.svg";
import { Button } from "@/components/ui/button";
import { FadeMask } from "@/components/fade-mask";
import { MeshNetworkAnimation } from "@/components/mesh-network-animation";
import { SchemeViewer } from "@/components/scheme-viewer";

export function Classification() {
  const [isSchemeOpen, setIsSchemeOpen] = useState(false);

  return (
    <Block containerClassName="inverted bg-background text-foreground py-7 md:py-30">
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

        <Scheme />

        <div className="flex flex-col gap-10">
          <p className="text-lg text-balance">
            Классификация диффузных глиом mIDH, адаптированная из&nbsp;работ
            Louis D&nbsp;et al.<sup>1</sup> и&nbsp;Brat DJ&nbsp;et&nbsp;al
            <sup>2</sup>.
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
