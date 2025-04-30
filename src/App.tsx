import Hero from "./ui/templates/Hero";
import Images from "./ui/templates/Images";
import OurFAQ from "./ui/templates/OurFAQ";
import TravelMade from "./ui/templates/TravelMade";
import VacationNever from "./ui/templates/VacationNever";

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <TravelMade />
        <VacationNever />
        <Images />
        <OurFAQ />
      </main>
    </>
  );
}
