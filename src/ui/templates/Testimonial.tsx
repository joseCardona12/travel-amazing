import { ICardTestimonial } from "../../interfaces/cardTestimonial";
import { CARD_DATA_TESTIMONIAL } from "../../utils/constanst/cardData";
import ActivePage from "../atoms/activePage";
import CardTestimonial from "../molecules/CardTestimonial";
import ContentText from "../molecules/ContentText";
import Pagination from "../molecules/Pagination";

export default function Testimonial() {
  return (
    <section className="p-2 pb-17">
      <div className="flex flex-col justify-center items-center gap-4 pb-10">
        <div className="w-[100px]">
          <ContentText text="Our FAQ" />
        </div>
        <h2 className="text-[2rem] md:w-[30%] text-center">
          What Our Travelers Love About Us
        </h2>
        <div className="flex justify-between w-full">
          <div className="flex gap-2 items-center">
            <ActivePage isActive />
            <ActivePage />
            <ActivePage />
            <ActivePage />
          </div>
          <Pagination />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2">
        {CARD_DATA_TESTIMONIAL.map((card: ICardTestimonial) => (
          <CardTestimonial
            addres={card.address}
            alt_image={card.alt_image}
            description={card.description}
            name={card.name}
            url_image={card.url_image}
          />
        ))}
      </div>
    </section>
  );
}
