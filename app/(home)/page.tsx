import { Classification } from "./classification/classification";
import { Hero } from "./hero/hero";
import { HighLevel } from "./hight-level/high-level";
import { UrgentActions } from "./urgent-actions/urgent-actions";
import { Influence } from "./influence/influence";
import { Sources } from "./sources/sources";

export default function Home() {
  return (
    <>
      <Hero />
      <Classification />
      <UrgentActions />
      <HighLevel />
      <Influence />
      <Sources />
    </>
  );
}
