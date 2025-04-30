import { ICard } from "../../interfaces/card";
import { CARD_DATA } from "../../utils/constanst/cardData";
import Card from "../molecules/Card";
import ContentText from "../molecules/ContentText";

export default function OurFAQ() {
  return (
    <section className="p-2 pt-15 pb-2 flex flex-col gap-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-20 pb-10">
        <div className="flex flex-col gap-2">
          <div className="w-[100px]">
            <ContentText text="Our FAQ" />
          </div>
          <h2 className="text-[1.8rem] md:w-[65%]">
            Everything You Need to Know, All in One Place
          </h2>
        </div>
        <div className="md:w-[50%]">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error iure
            cumque corrupti assumenda delectus vel atque modi, temporibus
            exercitationem inventore hic ad esse animi praesentium commodi
            veniam amet nihil! Harum.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 items-center">
        {CARD_DATA.map((card: ICard, index: number) => (
          <Card
            title={card.title}
            description={card.description}
            number={index}
          />
        ))}
      </div>
    </section>
  );
}
