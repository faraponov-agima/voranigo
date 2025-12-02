import { Block } from "@/components/block";
import Logo from "@/assets/logo.svg";
import { FadeMask } from "@/components/fade-mask";
import { MeshNetworkAnimation } from "@/components/mesh-network-animation";

const tumorTypes = [
  "Астроцитома mIDH",
  "Олигодендроглиома mIDH и коделеция 1p/19q",
] as const;

export function Hero() {
  return (
    <Block
      contentClassName="flex flex-col gap-12 py-6 md:py-6 relative"
      style={{
        background:
          "radial-gradient(108.03% 71.03% at 54.37% 0%, #7E7BD3 0%, #6D6BBB 10%, #4A4794 25%, #2E2C5C 50%, #1E1D39 70%, #0A0A0C 100%)",
      }}
    >
      <FadeMask
        fadeLeft
        fadeBottom
        fadeRight
        className="absolute right-0 top-0 aspect-[2] w-[35%]"
      >
        <MeshNetworkAnimation
          color="#ffffff"
          connectionDistance={300}
          particleCount={8}
        />
      </FadeMask>

      <div className="inline-flex w-fit items-center rounded-2xl bg-white/10 px-6 py-3">
        <a href="https://servier.ru/" target="_blank" rel="noopener noreferrer">
          <Logo className="h-[30px] w-[150px]" />
        </a>
      </div>

      <h1 className="max-w-4xl font-semibold tracking-tight text-4xl md:text-6xl mt-8 text-balance text-[#EAE5FF]">
        Мутации, определяющие заболевание при диффузной глиоме у&nbsp;взрослых
      </h1>

      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        <div className="max-w-2xl mx-auto relative">
          <video
            className="h-full mix-blend-lighten"
            src="/hero.mp4"
            playsInline
            autoPlay
            muted
            loop
          />
          <FadeMask
            fadeLeft
            fadeBottom
            fadeRight
            fadeTop
            fadeDistance="50px"
            className="absolute right-0 top-0 aspect-square w-[50%]"
          >
            <MeshNetworkAnimation
              color="#ffffff"
              connectionDistance={150}
              particleCount={25}
            />
          </FadeMask>
          <FadeMask
            fadeLeft
            fadeBottom
            fadeRight
            fadeTop
            fadeDistance="50px"
            className="absolute left-0 bottom-0 aspect-square w-[50%]"
          >
            <MeshNetworkAnimation
              color="#ffffff"
              connectionDistance={150}
              particleCount={25}
            />
          </FadeMask>
        </div>

        <div className="space-y-10 text-lg text-balance">
          <p>
            В&nbsp;классификации опухолей ЦНС ВОЗ 2021 года статус мутации IDH
            был определён как неотъемлемый компонент для верификации диагноза
            диффузной глиомы у&nbsp;взрослых пациентов
            <sup>1</sup>.
          </p>
          <div>
            <p className="mb-8 relative z-10">
              Согласно классификации ВОЗ 2021&nbsp;года, выделяют 2&nbsp;типа
              диффузной глиомы с&nbsp;мутацией IDH
              <sup>1</sup>.
            </p>
            <div className="relative overflow-hidden pt-5 -mt-5">
              <ul className="pl-10 space-y-5">
                {tumorTypes.map((type, index) => {
                  const isLast = index === tumorTypes.length - 1;
                  return (
                    <li key={type} className="flex gap-3 relative">
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
                      <span>{type}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <p>
            В&nbsp;ведущих клинических рекомендациях по&nbsp;нейроонкологии,
            включая EANO, ASCO-SNO и&nbsp;NCCN, отмечена важность мутации IDH
            в&nbsp;диагностике, определении прогноза и&nbsp;выборе терапии
            <sup>3-5</sup>.
          </p>
        </div>
      </div>
    </Block>
  );
}
