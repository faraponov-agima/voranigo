import { ChevronUp } from "lucide-react";

import { Block } from "@/components/block";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const references = [
  "Louis D et al. Neuro Oncol. 2021;23(8):1231–1251.",
  "Brat DJ. Arch Pathol Lab Med. 2022;146(5):547–574.",
  "Weller M et al. Nat Rev Clin Oncol. 2021;18(3):170–186.",
  "Mohile N et al. J Clin Oncol. 2022;40(4):403–426.",
  "NCCN Clinical Practice Guidelines in Oncology.",
  "Smits A et al. Neurosurg Clin N Am. 2019;30(1):35–42.",
  "Sahm F et al. Arch Neurol. 2012;69(4):523–526.",
  "Lenting K et al. Acta Neuropathol. 2017;133(2):263–282.",
  "Leeuw CN, Vogelbaum MA. Neuro Oncol. 2019;21(2):179–188.",
  "Ruda R et al. Nat Rev Neurol. 2024;20(7):395–407.",
  "Teng C et al. Front Immunol. 2022;13:899710.",
  "Rimmer B et al. Qual Life Res. 2023;32(3):625–651.",
  "Halkett GKB et al. Patient Educ Couns. 2015;98(4):525–532.",
  "Sledzinska P et al. Rev Neurosci. 2022;34(5):483–516.",
  "Mandonnet E et al. Neurooncol Pract. 2017;4(4):241–247.",
  "Field KM et al. J Clin Neurosci. 2016;23:81–87.",
  "Kayabolen A et al. Biomedicines. 2021;9(7):799.",
  "Han S et al. Br J Cancer. 2020;122(11):1580–1589.",
  "Bunse L et al. Nat Med. 2018;24(8):1192–1203.",
  "Kohanbash G et al. J Clin Invest. 2017;127(4):1425–1437.",
  "Friedrich M et al. Nat Cancer. 2021;2(7):723–740.",
  "Turcan S et al. Nature. 2012;483(7390):479–483.",
  "Lu C et al. Nature. 2012;483(7390):474–478.",
  "Oizel K et al. Cell Death Dis. 2015;6(3):e1704.",
  "Giacobetti SA, Fine HA. Cancer Cell. 2024;42(5):741–743.",
  "Yao K et al. J Exp Clin Cancer Res. 2021;40(1):263.",
  "Reitman Z et al. Proc Natl Acad Sci USA. 2011;108(8):3270–3275.",
  "Buckingham S et al. Nat Med. 2011;17(10):1269–1274.",
  "Yuen T et al. Neurology. 2012;79(9):883–889.",
  "Bhatia A et al. Clin Cancer Res. 2024;30(1):106–115.",
  "Losman JA, Kaelin WG. Genes Dev. 2013;27(8):836–852.",
  "Tommasini-Ghelfi S et al. Sci Adv. 2019;5(5):eaaw4543.",
] as const;

export function Sources() {
  return (
    <Block
      containerClassName="py-12 md:py-24 inverted bg-background text-foreground max-md:p-0"
      contentClassName="max-md:p-0"
    >
      <Accordion
        type="single"
        collapsible
        defaultValue="references"
        className="w-full"
      >
        <AccordionItem
          value="references"
          className="overflow-hidden rounded-none bg-[#ece7ff] md:rounded-[32px]"
        >
          <AccordionTrigger className="items-center gap-4 px-6 py-5 text-[#0b0f3e] md:px-10 md:py-8">
            <span className="text-left text-2xl font-semibold leading-tight tracking-[-0.04em] md:text-4xl">
              Список литературы
            </span>
            <ChevronUp
              className="size-10 rounded-full bg-[#0b0f3e] p-2 text-white transition-transform duration-400 md:size-12 md:p-3"
              strokeWidth={2.5}
            />
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6 pt-0 md:px-10 md:pb-10 duration-400">
            <ol className="list-decimal space-y-4 pl-6 text-sm leading-relaxed text-[#080f3c] marker:font-semibold marker:text-[#0b0f3e]/70 md:text-base">
              {references.map((entry) => (
                <li key={entry} className="pl-2">
                  {entry}
                </li>
              ))}
            </ol>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Block>
  );
}
