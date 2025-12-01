import { Block } from "@/components/Block";
import logo from "@/assets/logo.svg";

export default function Home() {
  return (
    <Block>
      <div className="px-6 py-3 bg-white/6 w-fit rounded-xl">
        <img src={logo.src} alt="logo" />
      </div>
      <h1 className="text-6xl font-semibold tracking-tight mt-12 md:mt-16 max-w-4xl">
        Мутации, определяющие заболевание при диффузной глиоме у взрослых
      </h1>
    </Block>
  );
}
