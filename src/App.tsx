
import Hero from "./ui/templates/Hero";
import TravelMade from "./ui/templates/TravelMade";
import VacationNever from "./ui/templates/VacationNever";

export default function App(){
  return (
    <>
      <Hero />
      <main>
        <TravelMade />
        <VacationNever />
      </main>
    </>
  );
}