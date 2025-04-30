import { ArrowRight } from "lucide-react";
import ContentText from "../molecules/ContentText";

export default function VacationNever() {
  return (
    <section className="flex flex-col md:flex-row justify-between p-6 gap-2 pt-15 pb-15">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-20">
        <ContentText text="Our Package" />
        <h2 className="text-[1.8rem]  md:w-[50%]">
          Vacations You'll Never Stop Talking About
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <p className="md:w-[70%]">
          Why settle for ordinary when extraordinary is just a booking away?
          Adventure, joy, and memories are waiting for you.
        </p>
        <div className="bg-[var(--color-black)] rounded-3xl text-white flex items-center gap-2 p-2 pl-6 w-[210px]">
          <p>Booking Vacation</p>
          <span>
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </section>
  );
}
