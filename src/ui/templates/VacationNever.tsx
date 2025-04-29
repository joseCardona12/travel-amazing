import { ArrowRight } from "lucide-react";
import ContentText from "../molecules/ContentText";

export default function VacationNever(){
    return (
      <section className="flex justify-between p-6 gap-2 pt-15">
        <ContentText text="Our Package" />
        <h2 className="text-[1.8rem] w-[40%]">Vacations You'll Never Stop Talking About</h2>
        <div>
          <p>Why settle for ordinary when extraordinary is just a booking away? Adventure, joy, and memories are waiting for you.</p>
          <div>
            <p>Booking Vacation</p>
            <span>
                <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </section>
    );
}