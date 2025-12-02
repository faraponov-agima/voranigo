import { Block } from "@/components/block";
import { FadeMask } from "@/components/fade-mask";
import { MeshNetworkAnimation } from "@/components/mesh-network-animation";

export function UrgentActions() {
  return (
    <Block contentClassName="flex flex-col gap-12 text-white py-30 md:py-30 relative">
      <FadeMask
        fadeLeft
        fadeRight
        fadeBottom
        className="absolute right-0 top-0 aspect-square w-[25%]"
      >
        <MeshNetworkAnimation
          color="#ffffff"
          connectionDistance={200}
          particleCount={16}
        />
      </FadeMask>
      <FadeMask
        fadeLeft
        fadeRight
        fadeTop
        className="absolute right-0 bottom-0 aspect-square w-[25%]"
      >
        <MeshNetworkAnimation
          color="#ffffff"
          connectionDistance={200}
          particleCount={16}
        />
      </FadeMask>
      <div className="max-w-4xl space-y-30 text-balance">
        <div className="space-y-12">
          <h1 className="max-w-4xl font-semibold tracking-tight text-4xl md:text-6xl">
            Диффузная глиома mIDH&nbsp;— необходимость срочных действий
          </h1>
          <p className="text-lg">
            При диффузных глиомах mIDH1/2 опухолевые клетки обширно
            инфильтрируют головной мозг<sup>6-8</sup>. Проходя по&nbsp;тракту
            белого вещества, они могут проникать в&nbsp;окружающие ткани
            <sup>7,8</sup>.
          </p>
          <p className="text-lg">
            Опухолевые клетки могут сохраняться даже после тотальной резекции и
            потенциально могут быть причиной рецидива заболевания
            в&nbsp;будущем, что влечет за&nbsp;собой неблагоприятный прогноз,
            трудности в&nbsp;лечении и негативное влияние на&nbsp;качество жизни
            пациента<sup>10-13</sup>.
          </p>
          <p className="text-lg">
            В&nbsp;течение последних 20&nbsp;лет стандартный подход
            к&nbsp;лечению пациентов с диффузной глиомой включал в&nbsp;себя
            проведение максимально безопасной резекции, назначение лучевой
            терапии +/– химиотерапии или применение тактики выжидательного
            наблюдения<sup>15, 16</sup>.
          </p>

          <p className="text-3xl font-semibold">
            В&nbsp;настоящее время более глубокое понимание роли мутировавшего
            гена IDH существенно дополнило представление о&nbsp;патогенезе
            диффузной глиомы<sup>10, 17</sup>.
          </p>
        </div>

        <div className="space-y-12">
          <h1 className="max-w-4xl font-semibold tracking-tight text-4xl md:text-6xl">
            Мутация IDH1/2: механизм образования диффузной глиомы
          </h1>
          <p className="text-lg">
            IDH1/2 играют жизненно важную роль в&nbsp;аэробном дыхании
            и&nbsp;генерации энергии клетками в&nbsp;норме. IDH дикого типа
            преобразует изоцитрат в &alpha;-КГ в&nbsp;цикле Кребса
            <sup>10, 17, 18</sup>.
          </p>
          <p className="text-lg">
            Однако наличие мутации изменяет функцию фермента
            изоцитратдегидрогеназы 1/2-го типа, приводя к&nbsp;избыточной
            выработке и накоплению 2-ГГ, который является онкометаболитом
            <sup>10, 17 ,18.</sup>
          </p>
        </div>
      </div>
    </Block>
  );
}
