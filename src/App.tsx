import Footer from "./ui/organisms/Footer";
import Hero from "./ui/templates/Hero";
import Images from "./ui/templates/Images";
import OurFAQ from "./ui/templates/OurFAQ";
import Testimonial from "./ui/templates/Testimonial";
import Tomorrow from "./ui/templates/Tomorrow";
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
        <Tomorrow />
        <Testimonial />
      </main>
      <Footer />
    </>
  );
}
