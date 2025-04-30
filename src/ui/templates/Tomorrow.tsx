import { ArrowRight } from "lucide-react";
import { IMAGES_PUBLIC_PEXELS } from "../../utils/constanst/dataImageTravelSimple";

export default function Tomorrow() {
  return (
    <section className="pt-10 pl-2 pr-2 pb-10">
      <div
        style={{
          backgroundImage: `url(${IMAGES_PUBLIC_PEXELS.image_tomorrow})`,
        }}
        className="relative w-[100%] bg-center bg-cover h-[500px] rounded-[var(--border-radius-min)] flex flex-col justify-center items-center text-white"
      >
        <div className="absolute inset-0 bg-black/60 rounded-[6px]"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center gap-4 p-4 ">
          <h2 className="text-[2rem] md:w-[40%] text-center">
            Why Wait for Tomorrow? Book Today!
          </h2>
          <p className="md:w-[60%] text-center">
            The vacation of your dreams is waiting for you, and there's no
            better time than now to experience it - book your trip and start
            living the excitement!
          </p>
          <div className="flex gap-2 items-center bg-white rounded-3xl text-[var(--color-black)] p-2 pl-5 pr-5">
            <p>Let's Goo..</p>
            <span>
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
